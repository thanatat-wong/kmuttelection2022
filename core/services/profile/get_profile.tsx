import axios from "axios";

import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const getProfileName = () => {
  return axios.get(`${publicRuntimeConfig.CKF_PROFILE_API}`)
}