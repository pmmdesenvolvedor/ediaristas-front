import React from 'react';
import { Container, Button, Typography } from '@material-ui/core';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import useIndex from 'data/hooks/pages/useIndex.page';
import {
  FormElementsContainer,
  CleanersPaper,
  CleanersContainer,
} from '../ui/styles/pages/index.style';

export default function Home() {
  const { cep, setCep, cepValido } = useIndex();
  return (
    <Container>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={
          'Preencha seu endereço e veja todos os profissionais da sua cidade'
        }
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            variant={'outlined'}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          <Typography color={'error'}>CEP inválido.</Typography>
          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        <CleanersPaper>
          <CleanersContainer>
            <UserInformation
              picture={'https://github.com/pmmdesenvolvedor.png'}
              name={'Paulo M Martinelli'}
              rating={4}
              description={`Sorocaba, SP`}
            />
            <UserInformation
              picture={'https://github.com/pmmdesenvolvedor.png'}
              name={'Paulo M Martinelli'}
              rating={4}
              description={`Sorocaba, SP`}
            />
            <UserInformation
              picture={'https://github.com/pmmdesenvolvedor.png'}
              name={'Paulo M Martinelli'}
              rating={4}
              description={`Sorocaba, SP`}
            />
            <UserInformation
              picture={'https://github.com/pmmdesenvolvedor.png'}
              name={'Paulo M Martinelli'}
              rating={4}
              description={`Sorocaba, SP`}
            />
            <UserInformation
              picture={'https://github.com/pmmdesenvolvedor.png'}
              name={'Paulo M Martinelli'}
              rating={4}
              description={`Sorocaba, SP`}
            />
            <UserInformation
              picture={'https://github.com/pmmdesenvolvedor.png'}
              name={'Paulo M Martinelli'}
              rating={4}
              description={`Sorocaba, SP`}
            />
          </CleanersContainer>
        </CleanersPaper>
      </Container>
    </Container>
  );
}
