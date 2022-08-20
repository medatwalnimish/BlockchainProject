import * as Yup from 'yup';
import { useState } from 'react';

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
import abi from '../../../utils/abi/abi.json';

// ----------------------------------------------------------------------

export default function DocumentForm() {
  const DocumentSchema = Yup.object().shape({
    Name: Yup.string().required('Name required'),
    Discription: Yup.string().required('Discription required'),
    Tags: Yup.string().required('Tag is required'),
  });

  const methods = useForm({
    resolver: yupResolver(DocumentSchema),
    // defaultValues,
  });

  const onSubmit = async () => {
    window.web3 = new Web3(window.ethereum);
    const web3 = new Web3(window.ethereum);
    const block = await web3.eth.getBlockNumber();
    const address = '0x61C9bf144Dc61AC9112F6f1e999fB63bFccE6D0A';
    const cert = new web3.eth.Contract(abi, address);
    console.log(block);

    const transaction = {
      from: web3.eth.accounts[0],
      to: address,
      data: cert.methods.safeMint(web3.eth.accounts[0], '').encodeABI(),
    };
    await window.web3.eth
      .sendTransaction(transaction)
      .then((accounts) => {
        console.log(accounts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={onSubmit} type="submit">
        Mint Nft
      </button>
    </div>
  );
}
