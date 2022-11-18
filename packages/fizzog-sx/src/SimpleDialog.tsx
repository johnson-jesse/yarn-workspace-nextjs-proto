import React from "react";
import { Dialog, DialogTitle } from "@fizzog/ui";

export type SimpleDialogProps = {
  open: boolean;
  title: string;
  children: React.ReactNode;
};

export default function SimpleDialog(props: SimpleDialogProps) {
  return (
    <Dialog open={props.open}>
      <DialogTitle>{props.title}</DialogTitle>
      <div>
        {props.children}
      </div>
    </Dialog>
  );
}
