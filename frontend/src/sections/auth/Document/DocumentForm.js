import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Web3 from 'web3';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export default function DocumentForm() {
  const navigate = useNavigate();

  const DocumentSchema = Yup.object().shape({
    Name: Yup.string().required('Name required'),
    Discription: Yup.string().required('Discription required'),
    Tags: Yup.string().required('Tag is required'),
  });

  const methods = useForm({
    resolver: yupResolver(DocumentSchema),
    // defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async () => {
    window.web3 = new Web3(window.ethereum);
    const web3 = new Web3(window.ethereum);
    const block = await web3.eth;
  };

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={3}>
        <RHFTextField name="Name" label="Name" />

        <RHFTextField name="Description" label="Description" type="text" />

        <RHFTextField name="Tags" label="Tags" />

        <LoadingButton fullWidth size="large" type="submit" variant="contained">
          Submit
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
