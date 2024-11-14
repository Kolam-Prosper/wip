import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface FeatureNotCompleteModalProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    featureName: string
}

export function FeatureNotCompleteModal({ isOpen, setIsOpen, featureName }: FeatureNotCompleteModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Feature Not Complete</DialogTitle>
                    <DialogDescription>
                        The {featureName} feature is not yet implemented. We&apos;re working on it and it will be available soon!
                    </DialogDescription>
                </DialogHeader>
                <DialogClose asChild>
                    <Button onClick={() => setIsOpen(false)}>Close</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}