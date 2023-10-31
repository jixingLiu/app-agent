import request from '@/utils/request'


export const updateInstall= (data: createAnyParams) => {
  return request({
    url: '/app-agent/install/bizInstallApplication',
    method: 'post',
    data: data
  })
}


export const getInstallList = (data: getInstallListParms) => {
  return request({
    url: '/app-agent/install/list',
    method: 'get',
    data: data
  })
}

// 安装申请获取
export const getBizInstallApplication = (data: getByIdParams) => {
  return request({
    url: '/app-agent/install/bizInstallApplication',
    method: 'get',
    data: data
  })
}

// 签约资料-贷款资料获取
export const getBizSignLoan = (data: getByIdParams) => {
  return request({
    url: '/app-agent/install/bizSignLoan',
    method: 'get',
    data: data
  })
}

export const updateBizSignLoan = (data: updateByIdParams) => {
  return request({
    url: '/app-agent/install/bizSignLoan',
    method: 'post',
    data: data
  })
}


// 签约资料-产品造价获取
export const getBizSignProductCost = (data: getByIdParams) => {
  return request({
    url: '/app-agent/install/bizSignProductCost',
    method: 'get',
    data: data
  })
}

export const updateBizSignProductCost = (data: updateByIdParams) => {
  return request({
    url: '/app-agent/install/bizSignProductCost',
    method: 'post',
    data: data
  })
}



// 签约资料-合同获取
export const getBizSignContract = (data: getByIdParams) => {
  return request({
    url: '/app-agent/install/bizSignContract',
    method: 'get',
    data: data
  })
}

export const updateBizSignContract = (data: updateByIdParams) => {
  return request({
    url: '/app-agent/install/bizSignContract',
    method: 'post',
    data: data
  })
}


// 踏勘资料-房屋信息获取
export const getBizSurveyHouse = (data: getByIdParams) => {
  return request({
    url: '/app-agent/install/bizSurveyHouse',
    method: 'get',
    data: data
  })
}

export const updateBizSurveyHouse = (data: updateByIdParams) => {
  return request({
    url: '/app-agent/install/bizSurveyHouse',
    method: 'post',
    data: data
  })
}


// 设计资料-结构设计获取
export const getBizDesignStructural = (data: getByIdParams) => {
  return request({
    url: '/app-agent/install/bizDesignStructural',
    method: 'get',
    data: data
  })
}

export const updateBizDesignStructural = (data: updateByIdParams) => {
  return request({
    url: '/app-agent/install/bizDesignStructural',
    method: 'post',
    data: data
  })
}


// 设计资料-电器设计获取
export const getBizDesignElectrical = (data: getByIdParams) => {
  return request({
    url: '/app-agent/install/bizDesignElectrical',
    method: 'get',
    data: data
  })
}

export const updateBizElectricalDesign = (data: updateByIdParams) => {
  return request({
    url: '/app-agent/install/bizDesignElectrical',
    method: 'post',
    data: data
  })
}


// 设计资料-设备信息获取
export const getBizCheckDevice = (data: getByIdParams) => {
  return request({
    url: '/app-agent/install/bizCheckDevice',
    method: 'get',
    data: data
  })
}

export const updateBizCheckDevice = (data: updateByIdParams) => {
  return request({
    url: '/app-agent/install/bizCheckDevice',
    method: 'post',
    data: data
  })
}


// 设计资料-电器获取
export const getBizCheckElectrical= (data: getByIdParams) => {
  return request({
    url: '/app-agent/install/bizCheckElectrical',
    method: 'get',
    data: data
  })
}

export const updateBizCheckElectrical = (data: updateByIdParams) => {
  return request({
    url: '/app-agent/install/bizCheckElectrical',
    method: 'post',
    data: data
  })
}


// 验收资料-并网信息获取
export const getBizCheckGridConnection= (data: getByIdParams) => {
  return request({
    url: '/app-agent/install/bizCheckGridConnection',
    method: 'get',
    data: data
  })
}

export const updateBizCheckGridConnection = (data: updateByIdParams) => {
  return request({
    url: '/app-agent/install/bizCheckGridConnection',
    method: 'post',
    data: data
  })
}