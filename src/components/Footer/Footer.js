import React from 'react';
import { Container, Box, Typography, Button, Stack } from '@mui/material';
import FooterItems from './FooterItems';
import { useLang } from '../../utils/i18n';

const COPY = {
  en: {
    headline: "Let's talk data",
    sub: "I'm looking for Data / BI Analyst roles in Los Angeles, Orange County, or remote in California.",
    cta: "Email Me",
    projects: "View Projects",
    subject: "Portfolio Inquiry",
  },
  es: {
    headline: "Let's talk data",
    sub: "I'm looking for Data / BI Analyst roles in Los Angeles, Orange County, or remote in California.",
    cta: "Email Me",
    projects: "View Projects",
    subject: "Portfolio Inquiry",
  },
};

export default function Footer() {
  const [lang] = useLang();
  const t = COPY[lang] || COPY.en;


  const emailHref = 'mailto:stephli6.work@gmail.com';

  return (
    <Box sx={{ bgcolor: 'primary.main', color: '#fff', mt: 6 }}>
      <Container maxWidth="lg" sx={{ py: 5, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
          {t.headline}
        </Typography>
        <Typography sx={{ opacity: 0.9, mb: 2 }}>
          {t.sub}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
          <Button
            href={emailHref}
            variant="contained"
            color="secondary"
            aria-label={t.cta}
          >
            {t.cta}
          </Button>
          <Button
            href="/projects"
            variant="outlined"
            sx={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }}
          >
            {t.projects}
          </Button>
        </Stack>
        <FooterItems />
        <Typography variant="caption" sx={{ display: 'block', mt: 2, opacity: 0.75 }}>
          © {new Date().getFullYear()} Stephanie Hwang
        </Typography>
      </Container>
    </Box>
  );
}


