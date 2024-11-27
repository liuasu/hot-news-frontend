declare namespace API {
  type BaseResponseBoolean_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: boolean;
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

  type BaseResponseListHotApiVO_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: HotApiVO[];
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

  type BaseResponseMapStringString_ = {
    code?: number;
    currentDateTime?: DateTime;
    data?: Record<string, any>;
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

  type editUsingPOST3Params = {
    /** id */
    id: number;
  };

  type findHotApiByIdUsingGETParams = {
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

  type HotApiQueryReq = {
    /** 接口名称 */
    apiName?: string;
    /** 平台 */
    platform?: string;
  };

  type HotApiVO = {
    apiDescribe?: string;
    apiName?: string;
    apiURL?: string;
    id?: number;
  };

  type HotNewsAddReq = {
    biId?: string;
    hotDesc?: string;
    hotURL?: string;
    id?: number;
    imageURL?: string;
    title?: string;
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
    /** 第三方账号平台 */
    platFormAccount?: string;
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

  type MapStringString_ = true;

  type OrderItem = {
    asc?: boolean;
    column?: string;
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

  type TaskAddReq = {
    /** 热点标题 */
    hotNewTitle?: string;
    /** 热点平台 */
    hotPlatForm?: string;
    /** url */
    hotUrl?: string;
    /** 第三方账号 */
    platFormAccount?: string;
    /** 任务名称 */
    taskName?: string;
  };

  type TaskEditReq = {
    /** id */
    id?: number;
    /** 第三方账号 */
    platFormAccount?: string;
    /** 任务状态 */
    taskStatus?: number;
  };

  type TaskVO = {
    hotNewTitle: string;
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
    current?: number;
    id?: number;
    mpOpenId?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    unionId?: string;
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
