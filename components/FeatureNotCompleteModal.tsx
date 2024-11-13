import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

export function FeatureNotCompleteModal({ isOpen, onClose }) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Feature Not Complete</DialogTitle>
                    <DialogDescription>
                        We&apos;re sorry, but this feature is not yet complete. We&apos;re working hard to bring you the best experience possible. Please check back later!
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={onClose}>Close</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}