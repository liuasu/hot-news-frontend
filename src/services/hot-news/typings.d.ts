declare namespace API {
  type AccountCentreVO = {
    count?: number;
    name?: string;
    thirdPartyAccountVOList?: ThirdPartyAccountVO[];
  };

  type AccountTrusteeship = {
    account?: string;
    hotType?: string;
    isDisabled?: boolean;
    platForm?: string;
    publishMaxNumber?: number;
    userName?: string;
  };

  type AiConfigEditReq = {
    /** ai平台 */
    aiPlatForm?: string;
    /** apiKey */
    apiKey?: string;
    /** apiSecret */
    apiSecret?: string;
    /** appid */
    appId?: string;
    /** id */
    id?: number;
  };

  type AiConfigVO = {
    aiPlatForm?: string;
    aiPlatFormName?: string;
    apiKey?: string;
    apiSecret?: string;
    appId?: string;
    id?: number;
  };

  type BaseResponseAiConfigVO_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: AiConfigVO;
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: boolean;
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponseDict_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: Dict;
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponseHotApiVO_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: HotApiVO;
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponseListAccountCentreVO_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: AccountCentreVO[];
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponseListAiConfigVO_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: AiConfigVO[];
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponseListDict_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: Dict[];
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponseListHotNewsVO_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: HotNewsVO[];
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponseListPromptVO_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: PromptVO[];
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponseListThirdPartyAccountVO_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: ThirdPartyAccountVO[];
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: LoginUserVO;
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponseLong_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: number;
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponseMapStringObject_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: Record<string, any>;
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponsePageHotApiVO_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: PageHotApiVO_;
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponsePageOperLog_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: PageOperLog_;
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponsePagePromptVO_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: PagePromptVO_;
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponsePageTaskVO_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: PageTaskVO_;
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: PageUser_;
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: PageUserVO_;
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponsePromptVO_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: PromptVO;
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponseString_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: string;
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponseUser_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: User;
    message?: string;
    updateDateTime?: DateTime;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: UserVO;
    message?: string;
    updateDateTime?: DateTime;
  };

  type DateTime = {
    am?: boolean;
    date?: number;
    day?: number;
    firstDayOfWeek?:
      | 'SUNDAY'
      | 'MONDAY'
      | 'TUESDAY'
      | 'WEDNESDAY'
      | 'THURSDAY'
      | 'FRIDAY'
      | 'SATURDAY';
    hours?: number;
    leapYear?: boolean;
    minutes?: number;
    month?: number;
    mutable?: boolean;
    pm?: boolean;
    seconds?: number;
    time?: number;
    timeZone?: TimeZone;
    timezoneOffset?: number;
    weekend?: boolean;
    year?: number;
    zoneId?: ZoneId;
  };

  type DeleteRequest = {
    id?: number;
  };

  type deleteUsingPOST1Params = {
    /** id */
    id: number;
  };

  type deleteUsingPOST2Params = {
    /** id */
    id: number;
  };

  type deleteUsingPOSTParams = {
    /** id */
    id: number;
  };

  type Dict = {
    createTime?: string;
    dictChildId?: number;
    dictLabelKey?: string;
    dictLabelValues?: string;
    dictName?: string;
    id?: number;
    isDelete?: number;
    status?: number;
    updateTime?: string;
    userId?: number;
  };

  type DictAddReq = {
    /** 字典类型 */
    dictChildId?: number;
    /** 字典标签(key) */
    dictLabelKey?: string;
    /** 字典标签(values) */
    dictLabelValues?: string;
    /** 字典名称 */
    dictName?: string;
    /** 状态（0正常 1停用） */
    status?: number;
    /** 用户id */
    userId?: number;
  };

  type DictEditReq = {
    /** 字典类型 */
    dictChildId?: number;
    /** 字典标签(key) */
    dictLabelKey?: string;
    /** 字典标签(values) */
    dictLabelValues?: string;
    /** 字典名称 */
    dictName?: string;
    /** id */
    id?: number;
    /** 状态（0正常 1停用） */
    status?: number;
    /** 用户id */
    userId?: number;
  };

  type Duration = {
    nano?: number;
    negative?: boolean;
    seconds?: number;
    units?: TemporalUnit[];
    zero?: boolean;
  };

  type editUsingPOST1Params = {
    /** id */
    id: number;
  };

  type editUsingPOST4Params = {
    /** id */
    id: number;
  };

  type findAiConfigByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type findDictByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type findHotApiByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type HotApiAddReq = {
    /** 接口描述 */
    apiDescribe?: string;
    /** 接口名称 */
    apiName?: string;
    /** 接口地址 */
    apiURL?: string;
    /** 平台 */
    platform?: string;
  };

  type HotApiEditReq = {
    /** 接口描述 */
    apiDescribe?: string;
    /** 接口名称 */
    apiName?: string;
    /** 接口地址 */
    apiURL?: string;
    /** id */
    id?: number;
    /** 平台 */
    platform?: string;
  };

  type HotApiVO = {
    apiDescribe?: string;
    apiName?: string;
    apiURL?: string;
    id?: number;
    platform?: string;
  };

  type HotNewsQueryReq = {
    hotType?: string;
  };

  type HotNewsVO = {
    biId?: string;
    hotDesc?: string;
    hotURL?: string;
    id?: number;
    imageURL?: string;
    title?: string;
  };

  type listUsingGET1Params = {
    createTime?: string;
    dictChildId?: number;
    dictLabelKey?: string;
    dictLabelValues?: string;
    dictName?: string;
    id?: number;
    isDelete?: number;
    status?: number;
    updateTime?: string;
    userId?: number;
  };

  type listUsingGET2Params = {
    /** 接口名称 */
    apiName?: string;
    /** 平台 */
    platform?: string;
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
  };

  type listUsingGET3Params = {
    current?: number;
    endTime?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    startTime?: string;
    userName?: string;
  };

  type listUsingGET4Params = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
  };

  type listUsingGET6Params = {
    /** 第三方账号平台 */
    platForm?: string;
    /** 任务状态 */
    taskStatus?: number;
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
  };

  type LocalTime = {
    hour?: number;
    minute?: number;
    nano?: number;
    second?: number;
  };

  type LoginUserVO = {
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type OperLog = {
    className?: string;
    costTime?: number;
    errorMsg?: string;
    id?: number;
    isDelete?: number;
    jsonResult?: string;
    method?: string;
    operIp?: string;
    operParam?: string;
    operTime?: string;
    operUrl?: string;
    operUser?: string;
    requestMethod?: string;
    status?: number;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageHotApiVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: HotApiVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOperLog_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OperLog[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PagePromptVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: PromptVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageTaskVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: TaskVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type ProductionArticleAddReq = {
    aiPlatForm?: string;
    hotURL?: string;
    promptName?: string;
    taskId?: string;
    thirdHotPartyFormName?: string;
    thirdPartyFormName?: string;
    title?: string;
    userIdStr?: string;
  };

  type ProductionArticleAddReq1 = {
    hotURL?: string;
    platformName?: string;
    title?: string;
  };

  type ProductionTrusteeshipAddReq = {
    accountTrusteeshipsList?: AccountTrusteeship[];
    aiPlatForm?: string;
    promptName?: string;
  };

  type PromptAddReq = {
    /** 模板名称 */
    promptName?: string;
    /** 提示词模板 */
    promptTemplate?: string;
  };

  type PromptEditReq = {
    /** id */
    id?: number;
    /** 模板名称 */
    promptName?: string;
    /** 提示词模板 */
    promptTemplate?: string;
  };

  type PromptVO = {
    id?: number;
    promptName?: string;
    promptTemplate?: string;
  };

  type queryThirdPartyAccountUsingGETParams = {
    thirdPartyFormName?: string;
    userIdStr?: string;
  };

  type TaskAddReq = {
    /** 热点标题 */
    hotNewTitle?: string;
    /** 热点平台 */
    hotPlatForm?: string;
    /** url */
    hotUrl?: string;
    /** 任务名称 */
    taskName?: string;
  };

  type TaskEditReq = {
    /** id */
    id?: number;
    /** 第三方账号平台 */
    platForm?: string;
    /** 第三方账号 */
    platFormAccount?: string;
  };

  type TaskVO = {
    hotNewTitle?: string;
    hotPlatForm?: string;
    hotUrl?: string;
    id?: number;
    platFormAccount?: string;
    taskName?: string;
    taskStatus?: number;
    user?: UserVO;
  };

  type TemporalUnit = {
    dateBased?: boolean;
    duration?: Duration;
    durationEstimated?: boolean;
    timeBased?: boolean;
  };

  type ThirdPartyAccountAddReq = {
    thirdPartyFormName?: string;
  };

  type ThirdPartyAccountDelReq = {
    account?: string;
    index?: number;
    thirdPartyFormName?: string;
  };

  type ThirdPartyAccountVO = {
    account?: string;
    isDisabled?: boolean;
    platForm?: string;
    userName?: string;
  };

  type TimeZone = {
    displayName?: string;
    dstsavings?: number;
    id?: string;
    rawOffset?: number;
  };

  type uploadFileUsingPOSTParams = {
    biz?: string;
  };

  type User = {
    createTime?: string;
    id?: number;
    isDelete?: number;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    createTime?: string;
    current?: number;
    id?: number;
    mpOpenId?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    unionId?: string;
    userAccount?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateMyRequest = {
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    createTime?: string;
    id?: number;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type ZoneId = {
    id?: string;
    rules?: ZoneRules;
  };

  type ZoneOffset = {
    id?: string;
    rules?: ZoneRules;
    totalSeconds?: number;
  };

  type ZoneOffsetTransition = {
    dateTimeAfter?: string;
    dateTimeBefore?: string;
    duration?: Duration;
    gap?: boolean;
    instant?: string;
    offsetAfter?: ZoneOffset;
    offsetBefore?: ZoneOffset;
    overlap?: boolean;
  };

  type ZoneOffsetTransitionRule = {
    dayOfMonthIndicator?: number;
    dayOfWeek?: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';
    localTime?: LocalTime;
    midnightEndOfDay?: boolean;
    month?:
      | 'JANUARY'
      | 'FEBRUARY'
      | 'MARCH'
      | 'APRIL'
      | 'MAY'
      | 'JUNE'
      | 'JULY'
      | 'AUGUST'
      | 'SEPTEMBER'
      | 'OCTOBER'
      | 'NOVEMBER'
      | 'DECEMBER';
    offsetAfter?: ZoneOffset;
    offsetBefore?: ZoneOffset;
    standardOffset?: ZoneOffset;
    timeDefinition?: 'UTC' | 'WALL' | 'STANDARD';
  };

  type ZoneRules = {
    fixedOffset?: boolean;
    transitionRules?: ZoneOffsetTransitionRule[];
    transitions?: ZoneOffsetTransition[];
  };
}
