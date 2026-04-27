import { useNavigate } from "@tanstack/react-router";
import type { ReactElement } from "react";

import { Button } from "@/components/ef-design-system";

import { useDevToolbar } from "./DevToolbarProvider";

export function PersonaSwitcher(): ReactElement {
	const { personas, currentPersona, setPersona } = useDevToolbar();
	const navigate = useNavigate();

	function handleSwitch(personaId: string): void {
		setPersona(personaId);
		navigate({ to: `/${personaId}` });
	}

	return (
		<div className="fixed top-0 right-0 left-0 z-[9999] flex h-10 items-center gap-1 bg-muted px-4">
			{personas.map((persona) => (
				<Button
					key={persona.id}
					size="xs"
					className={
						currentPersona.id !== persona.id
							? "text-white/70 hover:text-white"
							: ""
					}
					variant={
						currentPersona.id === persona.id
							? "primary"
							: "outline"
					}
					onClick={() => { handleSwitch(persona.id); }}
				>
					{persona.name} · {persona.role}
				</Button>
			))}
		</div>
	);
}
