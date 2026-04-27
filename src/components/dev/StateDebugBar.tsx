import type { ReactElement } from "react";

import { Button } from "@/components/ef-design-system";

import { type DataState, useDevToolbar } from "./DevToolbarProvider";

const STATES: ReadonlyArray<DataState> = [
	"populated",
	"empty",
	"loading",
	"error",
];

export function StateDebugBar(): ReactElement {
	const { currentState, setState } = useDevToolbar();

	return (
		<div className="fixed top-10 right-0 left-0 z-[9998] flex h-8 items-center gap-1 border-b border-border bg-muted px-4">
			<span className="mr-2 text-xs font-semibold text-muted-foreground">
				State:
			</span>
			{STATES.map((state) => (
				<Button
					key={state}
					className="capitalize"
					data-state={state}
					size="xs"
					variant={currentState === state ? "default" : "ghost"}
					onClick={() => { setState(state); }}
				>
					{state}
				</Button>
			))}
		</div>
	);
}
