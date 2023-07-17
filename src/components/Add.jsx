import { Avatar, Box, Fab, Modal, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon } from "@mui/icons-material"
import styled from '@emotion/styled'

const StyledModal = styled(Modal)({
  display: "flex", alignItems: "center", justifyContent: "center"
})

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Add" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(%50 - 25)", md: 30 } }}
        onClick={e => setOpen(true)}>
        <Fab >
          <AddIcon>Test</AddIcon>
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={290} bgcolor="white" p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
          
        </Box>
      </StyledModal>
    </>
  )
}

export default Add