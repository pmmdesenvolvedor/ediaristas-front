import { useState, useMemo } from 'react';
import { UserShortInterface } from 'data/@types/userInterface';
import { ValidationService } from 'data/services/Validation.service';
import { ApiService } from 'data/services/Api.service';

export default function useIndex() {
  const [cep, setCep] = useState(''),
    validCep = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [errorMsg, setErrorMsg] = useState(''),
    [searchDone, setSearchDone] = useState(false),
    [loading, setLoading] = useState(false),
    [cleaners, setCleaners] = useState([] as UserShortInterface[]),
    [cleanersRemaining, setCleanersRemaining] = useState(0);

  interface cleanersProps {
    diaristas: UserShortInterface[],
    quantidade_diaristas: number
  }

  async function searchCleaners(cep: string) {
    setSearchDone(false);
    setLoading(true);
    setErrorMsg('');

    try {
      const { data } = await ApiService.get<cleanersProps>(`/api/diaristas-cidade?cep=${cep.replace(/\D/g, '')}`);

      setCleaners(data.diaristas);
      setCleanersRemaining(data.quantidade_diaristas);

      setSearchDone(true);
      setLoading(false);
    } catch (error) {
      setErrorMsg('CEP não encontrado!');
      setLoading(false);
    }

  }


  return {
    cep,
    setCep,
    validCep,
    searchCleaners,
    errorMsg,
    cleaners,
    searchDone,
    loading,
    cleanersRemaining

  };
}
