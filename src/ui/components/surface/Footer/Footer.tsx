import React from 'react';
import {
  FooterContainer,
  FooterStyled,
  FooterTitle,
  AppList,
} from './Footer.style';
import { Typography, Box } from '@material-ui/core';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: '400px' }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={'body2'} sx={{ mt: 2 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            repudiandae, magni alias aut repellat eius repellendus doloremque
            vitae quis eos qui tempora eaque eveniet nisi. Id autem delectus
            cumque blanditiis.
          </Typography>
        </Box>

        <Box>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                <img src={'/img/logos/google-play.png'} alt={'Google Play'} />
              </a>
            </li>
            <li>
              <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                <img src={'/img/logos/app-store.png'} alt={'App Store'} />
              </a>
            </li>
          </AppList>
        </Box>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
