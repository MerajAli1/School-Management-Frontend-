import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" className="mt-3 w-100" onClick={handleOpen}>
        Enter Teacher Subjects, Classes & Section
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ENTER TEACHER SUBJECTS, CLASSES & SECTION
          </Typography>
          <Grid className="mt-2" item xs={12}>
            <TextField
              required
              fullWidth
              id="teachSubject"
              label="Teacher Subject"
              name="teachSubject"
            />
          </Grid>
          <Grid className="mt-2" item xs={12}>
            <TextField
              required
              fullWidth
              id="teachSubject"
              label="Teacher Subject"
              name="teachSubject"
            />
          </Grid>
          <Grid className="mt-2" item xs={12}>
            <TextField
              required
              fullWidth
              id="teachSubject"
              label="Teacher Subject"
              name="teachSubject"
            />
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
