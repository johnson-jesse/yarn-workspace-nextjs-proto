import { SimpleDialog } from "@fizzog/sx";
import { Button } from "@fizzog/ui";
import React from "react";

export default function Thing() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(!open)

  return (
    <>
      <Button color="primary" variant="contained" onClick={handleClose}>
        Custom MUI Button
      </Button>
      <SimpleDialog open={open} title="Hello Lorem" onClose={handleClose}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        ligula lacus, interdum et ornare at, tristique id sapien. Maecenas
        laoreet vestibulum ex vel interdum. Fusce dapibus rhoncus gravida. Nulla
        facilisi. Pellentesque pretium nulla non nibh aliquam, id dictum turpis
        pulvinar. Quisque tempor nulla a nibh elementum consectetur. Cras at
        velit aliquam, sagittis nibh sed, mollis eros. Sed nec lectus ut est
        lacinia sodales non elementum justo. Praesent pretium euismod eros, sed
        lacinia justo mollis in. Nullam eget lacinia nisi, a mollis nisl. Sed
        non congue diam. Duis porttitor, mi at tincidunt iaculis, purus mi
        tempus quam, quis mollis turpis massa id diam. Maecenas blandit sem et
        velit iaculis malesuada. Donec pulvinar orci ut felis pretium, sit amet
        mollis velit eleifend.
      </SimpleDialog>
    </>
  );
}
