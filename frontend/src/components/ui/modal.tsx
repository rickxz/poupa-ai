interface ModalProps {
	isOpen: boolean
	onClose: () => void
	title: string
	children: React.ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
	if (!isOpen) return null

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
			onClick={onClose}
		>
			<div
				className="relative w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex items-center justify-between p-6 border-b border-neutral-800">
					<h2 className="text-xl font-semibold text-white">{title}</h2>
					<button
						onClick={onClose}
						className="p-2 rounded-lg hover:bg-white/5 transition-colors"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-5 h-5 text-neutral-400 hover:text-white"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path d="M18 6L6 18" />
							<path d="M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div className="p-6">{children}</div>
			</div>
		</div>
	)
}
