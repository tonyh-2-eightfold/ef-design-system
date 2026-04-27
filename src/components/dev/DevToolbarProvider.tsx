import {
	createContext,
	useContext,
	useState,
	type ReactElement,
	type ReactNode,
} from "react";

export interface Persona {
	id: string;
	name: string;
	role: string;
}

export type DataState = "populated" | "empty" | "loading" | "error";

interface DevToolbarContextValue {
	personas: Array<Persona>;
	currentPersona: Persona;
	setPersona: (id: string) => void;
	currentState: DataState;
	setState: (state: DataState) => void;
}

const DevToolbarContext = createContext<DevToolbarContextValue | null>(null);

export function useDevToolbar(): DevToolbarContextValue {
	const ctx = useContext(DevToolbarContext);
	if (!ctx)
		throw new Error(
			"useDevToolbar must be used within DevToolbarProvider",
		);
	return ctx;
}

interface DevToolbarProviderProps {
	personas: Array<Persona>;
	children: ReactNode;
}

export function DevToolbarProvider({
	personas,
	children,
}: DevToolbarProviderProps): ReactElement {
	const [currentPersonaId, setCurrentPersonaId] = useState(
		personas[0]?.id ?? "",
	);
	const [currentState, setCurrentState] = useState<DataState>("populated");

	const currentPersona =
		personas.find((p) => p.id === currentPersonaId) ?? personas[0]!;

	return (
		<DevToolbarContext.Provider
			value={{
				personas,
				currentPersona,
				setPersona: setCurrentPersonaId,
				currentState,
				setState: setCurrentState,
			}}
		>
			{children}
		</DevToolbarContext.Provider>
	);
}
