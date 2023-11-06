interface loginParams {
  inputCode: string,
  phone: string,
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
  state?: string
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
  noticeType?: number | string
}