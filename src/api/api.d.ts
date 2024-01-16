interface loginParams {
  inputCode: string | number,
  phone: string,
  isVerify?:boolean
}

interface createAnyParams {
  [key:string]: any
}

interface verifyPhoneParams {
  phone: string,
}

interface updateUserInfoParams {
  [key:string]: any
}

interface getAreaCodeParams {
  pcode: number,
  level?: number,
  pname?:string,
  name?:string,
  code?:string,
  ancestors?:string,
}

interface paramsAgentEmployees {
  agentId: string,
}

interface getInstallListParms {
  pageNum: number,
  pageSize: number,
  state?: string,
  ownerName?: string,
  agentUserId?: string
}

interface getInstallCountParms {
  [key:string] : any,
}

interface getByIdParams {
  id: number | string
}

interface updateByIdParams {
  id: number | string,
  [key: string]: any;
}

interface noticeParams {
  pageNum: number,
  pageSize: number,
  status?: number | string,
  noticeType?: number | string,
  noticeTitle?: string,
}

interface getAgentParams {
  contactPhone?: string,
  [key: string]: any;
}