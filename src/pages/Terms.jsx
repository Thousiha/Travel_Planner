import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";

const Terms = () => {
  return (
    <Box
      sx={{
        bgcolor: "linear-gradient(to bottom, #e0f7fa, #b2ebf2)", // Iceberg-inspired icy gradient background
        minHeight: "100vh",
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Paper elevation={4} sx={{ p: 6, borderRadius: 4 }}>
          <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
            Terms & Conditions
          </Typography>

          <Typography variant="h6" color="textSecondary" gutterBottom>
            1. Acceptance of Terms
          </Typography>
          <Typography variant="body1" paragraph>
            By accessing our platform, you agree to comply with our terms. Violation may result in restricted access.
          </Typography>

          <Typography variant="h6" color="textSecondary" gutterBottom>
            2. Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We ensure the protection of your data. Personal information will never be sold or shared without consent.
          </Typography>

          <Typography variant="h6" color="textSecondary" gutterBottom>
            3. Service Usage
          </Typography>
          <Typography variant="body1" paragraph>
            Users must not exploit the platform for unauthorized activities or abuse our systems.
          </Typography>

          <Typography variant="h6" color="textSecondary" gutterBottom>
            4. Modifications
          </Typography>
          <Typography variant="body1" paragraph>
            These terms may be updated at any time. Continued use indicates your agreement with the revised terms.
          </Typography>

          <Typography variant="body2" mt={4}>
            For further queries, email us at <a href="mailto:support@travelplanner.com">support@travelplanner.com</a>.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Terms;
