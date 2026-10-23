
import { useToast } from "../../hooks/use-toast";
import * as ToastPrimitive from "@radix-ui/react-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastPrimitive.Provider duration={5000}>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <ToastPrimitive.Root
          key={id}
          open={props.open}
          onOpenChange={(open) => {
            if (!open) {
              props.onOpenChange?.(false);
            }
          }}
          className="fixed right-4 top-4 z-50 w-80 rounded-lg border bg-background p-4 shadow-lg"
        >
          <div className="grid gap-1">
            {title && (
              <ToastPrimitive.Title className="font-semibold">
                {title}
              </ToastPrimitive.Title>
            )}

            {description && (
              <ToastPrimitive.Description className="text-sm text-muted-foreground">
                {description}
              </ToastPrimitive.Description>
            )}
          </div>

          {action}
          <ToastPrimitive.Close
            aria-label="Close notification"
            className="absolute right-2 top-2 rounded px-2 py-1 hover:bg-secondary"
          >
            ×
          </ToastPrimitive.Close>
        </ToastPrimitive.Root>
      ))}

      <ToastPrimitive.Viewport className="fixed right-0 top-0 z-50 flex w-full max-w-sm flex-col gap-2 p-4 outline-none" />
    </ToastPrimitive.Provider>
  );
}
