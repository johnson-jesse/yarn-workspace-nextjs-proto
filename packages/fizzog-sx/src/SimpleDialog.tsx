import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@fizzog/ui";

export type SimpleDialogProps = {
  children: React.ReactNode;
  onClose(): void;
  open: boolean;
  title: string;
};

export default function SimpleDialog({ onClose = () => {}, ...props }: SimpleDialogProps) {
  return (
    <Dialog
      open={props.open}
      onClose={onClose}
    >
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent dividers>{props.children}</DialogContent>
    </Dialog>
  );
}
