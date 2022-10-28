import React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as Formik from 'formik';
import { AiOutlineUser } from 'react-icons/ai';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import {
  MdArrowDropDown,
  MdBuild,
  MdCall,
  MdCheckCircle,
  MdGraphicEq,
  MdGroupWork,
  MdPhone,
  MdReceipt,
  MdSettings,
} from 'react-icons/md';
import Lorem from 'react-lorem-component';
import * as Loaders from 'react-spinners';
import * as ReactTable from 'react-table';

const reactIcons = {
  MdSettings,
  MdReceipt,
  MdGroupWork,
  MdCheckCircle,
  MdGraphicEq,
  MdBuild,
  MdCall,
  MdPhone,
  MdArrowDropDown,
  AiOutlineUser,
  FaFacebook,
  FaTwitter,
};

const ReactLiveScope = {
  React,
  ...React,
  ...Chakra,
  ...Formik,
  ...ReactTable,
  ...Loaders,
  ...reactIcons,
  Lorem,
};

export default ReactLiveScope;
