import {
	Toast,
	ToastClose,
	ToastDescription,
	ToastProvider,
	ToastTitle,
	ToastViewport,
} from "@/toast.js";
import { useToast } from "@/use-toast.js";

export function Toaster(): JSX.Element {
	const { toasts } = useToast();

	return (
		<ToastProvider>
			{toasts.map((toast) => {
				const { id, title, description, action, ...rest } = toast;

				return (
					<Toast key={id} {...rest}>
						<div className="grid gap-1">
							{title != null ? <ToastTitle>{title}</ToastTitle> : null}
							{description != null ? <ToastDescription>{description}</ToastDescription> : null}
						</div>
						{action}
						<ToastClose />
					</Toast>
				);
			})}
			<ToastViewport />
		</ToastProvider>
	);
}
