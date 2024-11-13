import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

export function WIPModal({ isOpen, onClose }) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Work in Progress</DialogTitle>
                    <DialogDescription>
                        This feature is currently under development. We appreciate your patience as we work to bring you an enhanced experience. Please check back soon!
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={onClose}>Close</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}