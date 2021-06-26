import React from 'react';
import { Container, Button, Typography, CircularProgress } from '@material-ui/core';
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
  const {
    cep,
    setCep,
    validCep,
    searchCleaners,
    errorMsg,
    cleaners,
    searchDone,
    loading,
    cleanersRemaining
  } = useIndex();
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
          {errorMsg && <Typography color={'error'}>{errorMsg}</Typography>}
          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
            disabled={!validCep || loading}
            onClick={() => searchCleaners(cep)}
          >
            {loading ? <CircularProgress size={20} /> : 'Buscar'}
          </Button>
        </FormElementsContainer>

        {
          searchDone && ( cleaners.length > 0 ?
          (<CleanersPaper>
            <CleanersContainer>
            {
              cleaners.map((cleaner, index) => {
                return (
                  <UserInformation
                    key={`cleaner_${index}`}
                    picture={cleaner.foto_usuario}
                    name={cleaner.nome_completo}
                    rating={cleaner.reputacao}
                    description={cleaner.cidade}
                  />
                )
              })
            }



            </CleanersContainer>

            <Container sx={{ textAlign: 'center' }}>
              { cleanersRemaining > 0 &&
                (<Typography sx={{mt: 5}}>
                  ...e mais {cleanersRemaining} {cleanersRemaining === 1 ? 'profissional atende' : 'profissionais atendem'}  ao seu endereço.
                </Typography>)
              }
              <Button
                variant={'contained'}
                color={'secondary'}
                sx={{ mt: 5 }}
              >
                Contratar um profissional
              </Button>
            </Container>
          </CleanersPaper>)
          :
            <Typography align={'center'} color={'textPrimary'}>
              Ainda não temos nenhuma diarista cadastrada na tua região.
            </Typography>
          )
      }
        

      </Container>
    </Container>
  );
}
