import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

interface FeatureNotCompleteModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export function FeatureNotCompleteModal({ isOpen, onOpenChange }: FeatureNotCompleteModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Feature Not Complete</DialogTitle>
                    <DialogDescription>
                        We&apos;re sorry, but this feature is not yet complete. We&apos;re working hard to bring you the best experience possible. Please check back later!
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={() => onOpenChange(false)}>Close</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}