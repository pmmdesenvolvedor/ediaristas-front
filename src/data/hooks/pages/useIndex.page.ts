import { useState, useMemo } from 'react';
import { UserShortInterface } from 'data/@types/userInterface';
import { ValidationService } from 'data/services/Validation.service';

export default function useIndex() {
  const [cep, setCep] = useState(''),
    cepValido = useMemo(() => {
      return ValidationService.cep(cep) ? 'CEP VALIDO' : 'CEP INVALIDO';
    }, [cep]),
    [errorMsg, setErrorMsg] = useState(''),
    [searchDone, setSearchDone] = useState(false),
    [loading, setLoading] = useState(false),
    [cleaners, setCleaners] = useState([] as UserShortInterface[]),
    [cleanersRemaining, setCleanersRemaining] = useState(0);

  return { cep, setCep, cepValido };
}
