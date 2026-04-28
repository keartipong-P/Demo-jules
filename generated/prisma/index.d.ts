
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 *
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model AccountingPeriod
 *
 */
export type AccountingPeriod = $Result.DefaultSelection<Prisma.$AccountingPeriodPayload>
/**
 * Model JournalEntry
 *
 */
export type JournalEntry = $Result.DefaultSelection<Prisma.$JournalEntryPayload>
/**
 * Model JournalEntryLine
 *
 */
export type JournalEntryLine = $Result.DefaultSelection<Prisma.$JournalEntryLinePayload>
/**
 * Model AuditLog
 *
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Contact
 *
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Invoice
 *
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model CostCenter
 *
 */
export type CostCenter = $Result.DefaultSelection<Prisma.$CostCenterPayload>
/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccountType: {
  ASSET: 'ASSET',
  LIABILITY: 'LIABILITY',
  EQUITY: 'EQUITY',
  REVENUE: 'REVENUE',
  EXPENSE: 'EXPENSE'
};

export type AccountType = (typeof AccountType)[keyof typeof AccountType]


export const JournalEntryStatus: {
  DRAFT: 'DRAFT',
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  VOIDED: 'VOIDED'
};

export type JournalEntryStatus = (typeof JournalEntryStatus)[keyof typeof JournalEntryStatus]


export const ContactType: {
  CUSTOMER: 'CUSTOMER',
  VENDOR: 'VENDOR'
};

export type ContactType = (typeof ContactType)[keyof typeof ContactType]


export const InvoiceStatus: {
  DRAFT: 'DRAFT',
  OPEN: 'OPEN',
  PAID: 'PAID',
  VOID: 'VOID'
};

export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]


export const InvoiceType: {
  RECEIVABLE: 'RECEIVABLE',
  PAYABLE: 'PAYABLE'
};

export type InvoiceType = (typeof InvoiceType)[keyof typeof InvoiceType]


export const Role: {
  DATA_ENTRY: 'DATA_ENTRY',
  MANAGER: 'MANAGER',
  CONTROLLER: 'CONTROLLER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type AccountType = $Enums.AccountType

export const AccountType: typeof $Enums.AccountType

export type JournalEntryStatus = $Enums.JournalEntryStatus

export const JournalEntryStatus: typeof $Enums.JournalEntryStatus

export type ContactType = $Enums.ContactType

export const ContactType: typeof $Enums.ContactType

export type InvoiceStatus = $Enums.InvoiceStatus

export const InvoiceStatus: typeof $Enums.InvoiceStatus

export type InvoiceType = $Enums.InvoiceType

export const InvoiceType: typeof $Enums.InvoiceType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accountingPeriod`: Exposes CRUD operations for the **AccountingPeriod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountingPeriods
    * const accountingPeriods = await prisma.accountingPeriod.findMany()
    * ```
    */
  get accountingPeriod(): Prisma.AccountingPeriodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.journalEntry`: Exposes CRUD operations for the **JournalEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JournalEntries
    * const journalEntries = await prisma.journalEntry.findMany()
    * ```
    */
  get journalEntry(): Prisma.JournalEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.journalEntryLine`: Exposes CRUD operations for the **JournalEntryLine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JournalEntryLines
    * const journalEntryLines = await prisma.journalEntryLine.findMany()
    * ```
    */
  get journalEntryLine(): Prisma.JournalEntryLineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.costCenter`: Exposes CRUD operations for the **CostCenter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CostCenters
    * const costCenters = await prisma.costCenter.findMany()
    * ```
    */
  get costCenter(): Prisma.CostCenterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    AccountingPeriod: 'AccountingPeriod',
    JournalEntry: 'JournalEntry',
    JournalEntryLine: 'JournalEntryLine',
    AuditLog: 'AuditLog',
    Contact: 'Contact',
    Invoice: 'Invoice',
    CostCenter: 'CostCenter',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "accountingPeriod" | "journalEntry" | "journalEntryLine" | "auditLog" | "contact" | "invoice" | "costCenter" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      AccountingPeriod: {
        payload: Prisma.$AccountingPeriodPayload<ExtArgs>
        fields: Prisma.AccountingPeriodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountingPeriodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountingPeriodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountingPeriodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountingPeriodPayload>
          }
          findFirst: {
            args: Prisma.AccountingPeriodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountingPeriodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountingPeriodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountingPeriodPayload>
          }
          findMany: {
            args: Prisma.AccountingPeriodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountingPeriodPayload>[]
          }
          create: {
            args: Prisma.AccountingPeriodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountingPeriodPayload>
          }
          createMany: {
            args: Prisma.AccountingPeriodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountingPeriodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountingPeriodPayload>[]
          }
          delete: {
            args: Prisma.AccountingPeriodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountingPeriodPayload>
          }
          update: {
            args: Prisma.AccountingPeriodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountingPeriodPayload>
          }
          deleteMany: {
            args: Prisma.AccountingPeriodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountingPeriodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountingPeriodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountingPeriodPayload>[]
          }
          upsert: {
            args: Prisma.AccountingPeriodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountingPeriodPayload>
          }
          aggregate: {
            args: Prisma.AccountingPeriodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountingPeriod>
          }
          groupBy: {
            args: Prisma.AccountingPeriodGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountingPeriodGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountingPeriodCountArgs<ExtArgs>
            result: $Utils.Optional<AccountingPeriodCountAggregateOutputType> | number
          }
        }
      }
      JournalEntry: {
        payload: Prisma.$JournalEntryPayload<ExtArgs>
        fields: Prisma.JournalEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JournalEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JournalEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          findFirst: {
            args: Prisma.JournalEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JournalEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          findMany: {
            args: Prisma.JournalEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>[]
          }
          create: {
            args: Prisma.JournalEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          createMany: {
            args: Prisma.JournalEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JournalEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>[]
          }
          delete: {
            args: Prisma.JournalEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          update: {
            args: Prisma.JournalEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          deleteMany: {
            args: Prisma.JournalEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JournalEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JournalEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>[]
          }
          upsert: {
            args: Prisma.JournalEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          aggregate: {
            args: Prisma.JournalEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJournalEntry>
          }
          groupBy: {
            args: Prisma.JournalEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<JournalEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.JournalEntryCountArgs<ExtArgs>
            result: $Utils.Optional<JournalEntryCountAggregateOutputType> | number
          }
        }
      }
      JournalEntryLine: {
        payload: Prisma.$JournalEntryLinePayload<ExtArgs>
        fields: Prisma.JournalEntryLineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JournalEntryLineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryLinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JournalEntryLineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryLinePayload>
          }
          findFirst: {
            args: Prisma.JournalEntryLineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryLinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JournalEntryLineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryLinePayload>
          }
          findMany: {
            args: Prisma.JournalEntryLineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryLinePayload>[]
          }
          create: {
            args: Prisma.JournalEntryLineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryLinePayload>
          }
          createMany: {
            args: Prisma.JournalEntryLineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JournalEntryLineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryLinePayload>[]
          }
          delete: {
            args: Prisma.JournalEntryLineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryLinePayload>
          }
          update: {
            args: Prisma.JournalEntryLineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryLinePayload>
          }
          deleteMany: {
            args: Prisma.JournalEntryLineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JournalEntryLineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JournalEntryLineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryLinePayload>[]
          }
          upsert: {
            args: Prisma.JournalEntryLineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryLinePayload>
          }
          aggregate: {
            args: Prisma.JournalEntryLineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJournalEntryLine>
          }
          groupBy: {
            args: Prisma.JournalEntryLineGroupByArgs<ExtArgs>
            result: $Utils.Optional<JournalEntryLineGroupByOutputType>[]
          }
          count: {
            args: Prisma.JournalEntryLineCountArgs<ExtArgs>
            result: $Utils.Optional<JournalEntryLineCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      CostCenter: {
        payload: Prisma.$CostCenterPayload<ExtArgs>
        fields: Prisma.CostCenterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CostCenterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostCenterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CostCenterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostCenterPayload>
          }
          findFirst: {
            args: Prisma.CostCenterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostCenterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CostCenterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostCenterPayload>
          }
          findMany: {
            args: Prisma.CostCenterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostCenterPayload>[]
          }
          create: {
            args: Prisma.CostCenterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostCenterPayload>
          }
          createMany: {
            args: Prisma.CostCenterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CostCenterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostCenterPayload>[]
          }
          delete: {
            args: Prisma.CostCenterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostCenterPayload>
          }
          update: {
            args: Prisma.CostCenterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostCenterPayload>
          }
          deleteMany: {
            args: Prisma.CostCenterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CostCenterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CostCenterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostCenterPayload>[]
          }
          upsert: {
            args: Prisma.CostCenterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CostCenterPayload>
          }
          aggregate: {
            args: Prisma.CostCenterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCostCenter>
          }
          groupBy: {
            args: Prisma.CostCenterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CostCenterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CostCenterCountArgs<ExtArgs>
            result: $Utils.Optional<CostCenterCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    accountingPeriod?: AccountingPeriodOmit
    journalEntry?: JournalEntryOmit
    journalEntryLine?: JournalEntryLineOmit
    auditLog?: AuditLogOmit
    contact?: ContactOmit
    invoice?: InvoiceOmit
    costCenter?: CostCenterOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    lines: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | AccountCountOutputTypeCountLinesArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalEntryLineWhereInput
  }


  /**
   * Count Type JournalEntryCountOutputType
   */

  export type JournalEntryCountOutputType = {
    lines: number
  }

  export type JournalEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | JournalEntryCountOutputTypeCountLinesArgs
  }

  // Custom InputTypes
  /**
   * JournalEntryCountOutputType without action
   */
  export type JournalEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryCountOutputType
     */
    select?: JournalEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JournalEntryCountOutputType without action
   */
  export type JournalEntryCountOutputTypeCountLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalEntryLineWhereInput
  }


  /**
   * Count Type ContactCountOutputType
   */

  export type ContactCountOutputType = {
    invoices: number
  }

  export type ContactCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | ContactCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactCountOutputType
     */
    select?: ContactCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Count Type CostCenterCountOutputType
   */

  export type CostCenterCountOutputType = {
    lines: number
  }

  export type CostCenterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | CostCenterCountOutputTypeCountLinesArgs
  }

  // Custom InputTypes
  /**
   * CostCenterCountOutputType without action
   */
  export type CostCenterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostCenterCountOutputType
     */
    select?: CostCenterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CostCenterCountOutputType without action
   */
  export type CostCenterCountOutputTypeCountLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalEntryLineWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    type: $Enums.AccountType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    type: $Enums.AccountType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    code: number
    name: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: number
    code: string
    name: string
    type: $Enums.AccountType
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lines?: boolean | Account$linesArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | Account$linesArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      lines: Prisma.$JournalEntryLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      type: $Enums.AccountType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     *
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     *
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     *
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lines<T extends Account$linesArgs<ExtArgs> = {}>(args?: Subset<T, Account$linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'Int'>
    readonly code: FieldRef<"Account", 'String'>
    readonly name: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'AccountType'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }


  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.lines
   */
  export type Account$linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryLine
     */
    select?: JournalEntryLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryLine
     */
    omit?: JournalEntryLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryLineInclude<ExtArgs> | null
    where?: JournalEntryLineWhereInput
    orderBy?: JournalEntryLineOrderByWithRelationInput | JournalEntryLineOrderByWithRelationInput[]
    cursor?: JournalEntryLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JournalEntryLineScalarFieldEnum | JournalEntryLineScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model AccountingPeriod
   */

  export type AggregateAccountingPeriod = {
    _count: AccountingPeriodCountAggregateOutputType | null
    _avg: AccountingPeriodAvgAggregateOutputType | null
    _sum: AccountingPeriodSumAggregateOutputType | null
    _min: AccountingPeriodMinAggregateOutputType | null
    _max: AccountingPeriodMaxAggregateOutputType | null
  }

  export type AccountingPeriodAvgAggregateOutputType = {
    id: number | null
  }

  export type AccountingPeriodSumAggregateOutputType = {
    id: number | null
  }

  export type AccountingPeriodMinAggregateOutputType = {
    id: number | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    isClosed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountingPeriodMaxAggregateOutputType = {
    id: number | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    isClosed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountingPeriodCountAggregateOutputType = {
    id: number
    name: number
    startDate: number
    endDate: number
    isClosed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountingPeriodAvgAggregateInputType = {
    id?: true
  }

  export type AccountingPeriodSumAggregateInputType = {
    id?: true
  }

  export type AccountingPeriodMinAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    isClosed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountingPeriodMaxAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    isClosed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountingPeriodCountAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    isClosed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountingPeriodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountingPeriod to aggregate.
     */
    where?: AccountingPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AccountingPeriods to fetch.
     */
    orderBy?: AccountingPeriodOrderByWithRelationInput | AccountingPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AccountingPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AccountingPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AccountingPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AccountingPeriods
    **/
    _count?: true | AccountingPeriodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AccountingPeriodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AccountingPeriodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AccountingPeriodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AccountingPeriodMaxAggregateInputType
  }

  export type GetAccountingPeriodAggregateType<T extends AccountingPeriodAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountingPeriod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountingPeriod[P]>
      : GetScalarType<T[P], AggregateAccountingPeriod[P]>
  }




  export type AccountingPeriodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountingPeriodWhereInput
    orderBy?: AccountingPeriodOrderByWithAggregationInput | AccountingPeriodOrderByWithAggregationInput[]
    by: AccountingPeriodScalarFieldEnum[] | AccountingPeriodScalarFieldEnum
    having?: AccountingPeriodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountingPeriodCountAggregateInputType | true
    _avg?: AccountingPeriodAvgAggregateInputType
    _sum?: AccountingPeriodSumAggregateInputType
    _min?: AccountingPeriodMinAggregateInputType
    _max?: AccountingPeriodMaxAggregateInputType
  }

  export type AccountingPeriodGroupByOutputType = {
    id: number
    name: string
    startDate: Date
    endDate: Date
    isClosed: boolean
    createdAt: Date
    updatedAt: Date
    _count: AccountingPeriodCountAggregateOutputType | null
    _avg: AccountingPeriodAvgAggregateOutputType | null
    _sum: AccountingPeriodSumAggregateOutputType | null
    _min: AccountingPeriodMinAggregateOutputType | null
    _max: AccountingPeriodMaxAggregateOutputType | null
  }

  type GetAccountingPeriodGroupByPayload<T extends AccountingPeriodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountingPeriodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountingPeriodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountingPeriodGroupByOutputType[P]>
            : GetScalarType<T[P], AccountingPeriodGroupByOutputType[P]>
        }
      >
    >


  export type AccountingPeriodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    isClosed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accountingPeriod"]>

  export type AccountingPeriodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    isClosed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accountingPeriod"]>

  export type AccountingPeriodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    isClosed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accountingPeriod"]>

  export type AccountingPeriodSelectScalar = {
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    isClosed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountingPeriodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startDate" | "endDate" | "isClosed" | "createdAt" | "updatedAt", ExtArgs["result"]["accountingPeriod"]>

  export type $AccountingPeriodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountingPeriod"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      startDate: Date
      endDate: Date
      isClosed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accountingPeriod"]>
    composites: {}
  }

  type AccountingPeriodGetPayload<S extends boolean | null | undefined | AccountingPeriodDefaultArgs> = $Result.GetResult<Prisma.$AccountingPeriodPayload, S>

  type AccountingPeriodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountingPeriodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountingPeriodCountAggregateInputType | true
    }

  export interface AccountingPeriodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountingPeriod'], meta: { name: 'AccountingPeriod' } }
    /**
     * Find zero or one AccountingPeriod that matches the filter.
     * @param {AccountingPeriodFindUniqueArgs} args - Arguments to find a AccountingPeriod
     * @example
     * // Get one AccountingPeriod
     * const accountingPeriod = await prisma.accountingPeriod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountingPeriodFindUniqueArgs>(args: SelectSubset<T, AccountingPeriodFindUniqueArgs<ExtArgs>>): Prisma__AccountingPeriodClient<$Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccountingPeriod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountingPeriodFindUniqueOrThrowArgs} args - Arguments to find a AccountingPeriod
     * @example
     * // Get one AccountingPeriod
     * const accountingPeriod = await prisma.accountingPeriod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountingPeriodFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountingPeriodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountingPeriodClient<$Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountingPeriod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountingPeriodFindFirstArgs} args - Arguments to find a AccountingPeriod
     * @example
     * // Get one AccountingPeriod
     * const accountingPeriod = await prisma.accountingPeriod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountingPeriodFindFirstArgs>(args?: SelectSubset<T, AccountingPeriodFindFirstArgs<ExtArgs>>): Prisma__AccountingPeriodClient<$Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountingPeriod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountingPeriodFindFirstOrThrowArgs} args - Arguments to find a AccountingPeriod
     * @example
     * // Get one AccountingPeriod
     * const accountingPeriod = await prisma.accountingPeriod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountingPeriodFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountingPeriodFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountingPeriodClient<$Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccountingPeriods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountingPeriodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountingPeriods
     * const accountingPeriods = await prisma.accountingPeriod.findMany()
     *
     * // Get first 10 AccountingPeriods
     * const accountingPeriods = await prisma.accountingPeriod.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const accountingPeriodWithIdOnly = await prisma.accountingPeriod.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AccountingPeriodFindManyArgs>(args?: SelectSubset<T, AccountingPeriodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccountingPeriod.
     * @param {AccountingPeriodCreateArgs} args - Arguments to create a AccountingPeriod.
     * @example
     * // Create one AccountingPeriod
     * const AccountingPeriod = await prisma.accountingPeriod.create({
     *   data: {
     *     // ... data to create a AccountingPeriod
     *   }
     * })
     *
     */
    create<T extends AccountingPeriodCreateArgs>(args: SelectSubset<T, AccountingPeriodCreateArgs<ExtArgs>>): Prisma__AccountingPeriodClient<$Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccountingPeriods.
     * @param {AccountingPeriodCreateManyArgs} args - Arguments to create many AccountingPeriods.
     * @example
     * // Create many AccountingPeriods
     * const accountingPeriod = await prisma.accountingPeriod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AccountingPeriodCreateManyArgs>(args?: SelectSubset<T, AccountingPeriodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountingPeriods and returns the data saved in the database.
     * @param {AccountingPeriodCreateManyAndReturnArgs} args - Arguments to create many AccountingPeriods.
     * @example
     * // Create many AccountingPeriods
     * const accountingPeriod = await prisma.accountingPeriod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AccountingPeriods and only return the `id`
     * const accountingPeriodWithIdOnly = await prisma.accountingPeriod.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AccountingPeriodCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountingPeriodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccountingPeriod.
     * @param {AccountingPeriodDeleteArgs} args - Arguments to delete one AccountingPeriod.
     * @example
     * // Delete one AccountingPeriod
     * const AccountingPeriod = await prisma.accountingPeriod.delete({
     *   where: {
     *     // ... filter to delete one AccountingPeriod
     *   }
     * })
     *
     */
    delete<T extends AccountingPeriodDeleteArgs>(args: SelectSubset<T, AccountingPeriodDeleteArgs<ExtArgs>>): Prisma__AccountingPeriodClient<$Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccountingPeriod.
     * @param {AccountingPeriodUpdateArgs} args - Arguments to update one AccountingPeriod.
     * @example
     * // Update one AccountingPeriod
     * const accountingPeriod = await prisma.accountingPeriod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AccountingPeriodUpdateArgs>(args: SelectSubset<T, AccountingPeriodUpdateArgs<ExtArgs>>): Prisma__AccountingPeriodClient<$Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccountingPeriods.
     * @param {AccountingPeriodDeleteManyArgs} args - Arguments to filter AccountingPeriods to delete.
     * @example
     * // Delete a few AccountingPeriods
     * const { count } = await prisma.accountingPeriod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AccountingPeriodDeleteManyArgs>(args?: SelectSubset<T, AccountingPeriodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountingPeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountingPeriodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountingPeriods
     * const accountingPeriod = await prisma.accountingPeriod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AccountingPeriodUpdateManyArgs>(args: SelectSubset<T, AccountingPeriodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountingPeriods and returns the data updated in the database.
     * @param {AccountingPeriodUpdateManyAndReturnArgs} args - Arguments to update many AccountingPeriods.
     * @example
     * // Update many AccountingPeriods
     * const accountingPeriod = await prisma.accountingPeriod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AccountingPeriods and only return the `id`
     * const accountingPeriodWithIdOnly = await prisma.accountingPeriod.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AccountingPeriodUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountingPeriodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccountingPeriod.
     * @param {AccountingPeriodUpsertArgs} args - Arguments to update or create a AccountingPeriod.
     * @example
     * // Update or create a AccountingPeriod
     * const accountingPeriod = await prisma.accountingPeriod.upsert({
     *   create: {
     *     // ... data to create a AccountingPeriod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountingPeriod we want to update
     *   }
     * })
     */
    upsert<T extends AccountingPeriodUpsertArgs>(args: SelectSubset<T, AccountingPeriodUpsertArgs<ExtArgs>>): Prisma__AccountingPeriodClient<$Result.GetResult<Prisma.$AccountingPeriodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccountingPeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountingPeriodCountArgs} args - Arguments to filter AccountingPeriods to count.
     * @example
     * // Count the number of AccountingPeriods
     * const count = await prisma.accountingPeriod.count({
     *   where: {
     *     // ... the filter for the AccountingPeriods we want to count
     *   }
     * })
    **/
    count<T extends AccountingPeriodCountArgs>(
      args?: Subset<T, AccountingPeriodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountingPeriodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountingPeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountingPeriodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountingPeriodAggregateArgs>(args: Subset<T, AccountingPeriodAggregateArgs>): Prisma.PrismaPromise<GetAccountingPeriodAggregateType<T>>

    /**
     * Group by AccountingPeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountingPeriodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<
      T extends AccountingPeriodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountingPeriodGroupByArgs['orderBy'] }
        : { orderBy?: AccountingPeriodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountingPeriodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountingPeriodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountingPeriod model
   */
  readonly fields: AccountingPeriodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountingPeriod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountingPeriodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccountingPeriod model
   */
  interface AccountingPeriodFieldRefs {
    readonly id: FieldRef<"AccountingPeriod", 'Int'>
    readonly name: FieldRef<"AccountingPeriod", 'String'>
    readonly startDate: FieldRef<"AccountingPeriod", 'DateTime'>
    readonly endDate: FieldRef<"AccountingPeriod", 'DateTime'>
    readonly isClosed: FieldRef<"AccountingPeriod", 'Boolean'>
    readonly createdAt: FieldRef<"AccountingPeriod", 'DateTime'>
    readonly updatedAt: FieldRef<"AccountingPeriod", 'DateTime'>
  }


  // Custom InputTypes
  /**
   * AccountingPeriod findUnique
   */
  export type AccountingPeriodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountingPeriod
     */
    select?: AccountingPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountingPeriod
     */
    omit?: AccountingPeriodOmit<ExtArgs> | null
    /**
     * Filter, which AccountingPeriod to fetch.
     */
    where: AccountingPeriodWhereUniqueInput
  }

  /**
   * AccountingPeriod findUniqueOrThrow
   */
  export type AccountingPeriodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountingPeriod
     */
    select?: AccountingPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountingPeriod
     */
    omit?: AccountingPeriodOmit<ExtArgs> | null
    /**
     * Filter, which AccountingPeriod to fetch.
     */
    where: AccountingPeriodWhereUniqueInput
  }

  /**
   * AccountingPeriod findFirst
   */
  export type AccountingPeriodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountingPeriod
     */
    select?: AccountingPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountingPeriod
     */
    omit?: AccountingPeriodOmit<ExtArgs> | null
    /**
     * Filter, which AccountingPeriod to fetch.
     */
    where?: AccountingPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AccountingPeriods to fetch.
     */
    orderBy?: AccountingPeriodOrderByWithRelationInput | AccountingPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AccountingPeriods.
     */
    cursor?: AccountingPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AccountingPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AccountingPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AccountingPeriods.
     */
    distinct?: AccountingPeriodScalarFieldEnum | AccountingPeriodScalarFieldEnum[]
  }

  /**
   * AccountingPeriod findFirstOrThrow
   */
  export type AccountingPeriodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountingPeriod
     */
    select?: AccountingPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountingPeriod
     */
    omit?: AccountingPeriodOmit<ExtArgs> | null
    /**
     * Filter, which AccountingPeriod to fetch.
     */
    where?: AccountingPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AccountingPeriods to fetch.
     */
    orderBy?: AccountingPeriodOrderByWithRelationInput | AccountingPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AccountingPeriods.
     */
    cursor?: AccountingPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AccountingPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AccountingPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AccountingPeriods.
     */
    distinct?: AccountingPeriodScalarFieldEnum | AccountingPeriodScalarFieldEnum[]
  }

  /**
   * AccountingPeriod findMany
   */
  export type AccountingPeriodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountingPeriod
     */
    select?: AccountingPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountingPeriod
     */
    omit?: AccountingPeriodOmit<ExtArgs> | null
    /**
     * Filter, which AccountingPeriods to fetch.
     */
    where?: AccountingPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AccountingPeriods to fetch.
     */
    orderBy?: AccountingPeriodOrderByWithRelationInput | AccountingPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AccountingPeriods.
     */
    cursor?: AccountingPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AccountingPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AccountingPeriods.
     */
    skip?: number
    distinct?: AccountingPeriodScalarFieldEnum | AccountingPeriodScalarFieldEnum[]
  }

  /**
   * AccountingPeriod create
   */
  export type AccountingPeriodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountingPeriod
     */
    select?: AccountingPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountingPeriod
     */
    omit?: AccountingPeriodOmit<ExtArgs> | null
    /**
     * The data needed to create a AccountingPeriod.
     */
    data: XOR<AccountingPeriodCreateInput, AccountingPeriodUncheckedCreateInput>
  }

  /**
   * AccountingPeriod createMany
   */
  export type AccountingPeriodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountingPeriods.
     */
    data: AccountingPeriodCreateManyInput | AccountingPeriodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountingPeriod createManyAndReturn
   */
  export type AccountingPeriodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountingPeriod
     */
    select?: AccountingPeriodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountingPeriod
     */
    omit?: AccountingPeriodOmit<ExtArgs> | null
    /**
     * The data used to create many AccountingPeriods.
     */
    data: AccountingPeriodCreateManyInput | AccountingPeriodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountingPeriod update
   */
  export type AccountingPeriodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountingPeriod
     */
    select?: AccountingPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountingPeriod
     */
    omit?: AccountingPeriodOmit<ExtArgs> | null
    /**
     * The data needed to update a AccountingPeriod.
     */
    data: XOR<AccountingPeriodUpdateInput, AccountingPeriodUncheckedUpdateInput>
    /**
     * Choose, which AccountingPeriod to update.
     */
    where: AccountingPeriodWhereUniqueInput
  }

  /**
   * AccountingPeriod updateMany
   */
  export type AccountingPeriodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountingPeriods.
     */
    data: XOR<AccountingPeriodUpdateManyMutationInput, AccountingPeriodUncheckedUpdateManyInput>
    /**
     * Filter which AccountingPeriods to update
     */
    where?: AccountingPeriodWhereInput
    /**
     * Limit how many AccountingPeriods to update.
     */
    limit?: number
  }

  /**
   * AccountingPeriod updateManyAndReturn
   */
  export type AccountingPeriodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountingPeriod
     */
    select?: AccountingPeriodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountingPeriod
     */
    omit?: AccountingPeriodOmit<ExtArgs> | null
    /**
     * The data used to update AccountingPeriods.
     */
    data: XOR<AccountingPeriodUpdateManyMutationInput, AccountingPeriodUncheckedUpdateManyInput>
    /**
     * Filter which AccountingPeriods to update
     */
    where?: AccountingPeriodWhereInput
    /**
     * Limit how many AccountingPeriods to update.
     */
    limit?: number
  }

  /**
   * AccountingPeriod upsert
   */
  export type AccountingPeriodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountingPeriod
     */
    select?: AccountingPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountingPeriod
     */
    omit?: AccountingPeriodOmit<ExtArgs> | null
    /**
     * The filter to search for the AccountingPeriod to update in case it exists.
     */
    where: AccountingPeriodWhereUniqueInput
    /**
     * In case the AccountingPeriod found by the `where` argument doesn't exist, create a new AccountingPeriod with this data.
     */
    create: XOR<AccountingPeriodCreateInput, AccountingPeriodUncheckedCreateInput>
    /**
     * In case the AccountingPeriod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountingPeriodUpdateInput, AccountingPeriodUncheckedUpdateInput>
  }

  /**
   * AccountingPeriod delete
   */
  export type AccountingPeriodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountingPeriod
     */
    select?: AccountingPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountingPeriod
     */
    omit?: AccountingPeriodOmit<ExtArgs> | null
    /**
     * Filter which AccountingPeriod to delete.
     */
    where: AccountingPeriodWhereUniqueInput
  }

  /**
   * AccountingPeriod deleteMany
   */
  export type AccountingPeriodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountingPeriods to delete
     */
    where?: AccountingPeriodWhereInput
    /**
     * Limit how many AccountingPeriods to delete.
     */
    limit?: number
  }

  /**
   * AccountingPeriod without action
   */
  export type AccountingPeriodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountingPeriod
     */
    select?: AccountingPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountingPeriod
     */
    omit?: AccountingPeriodOmit<ExtArgs> | null
  }


  /**
   * Model JournalEntry
   */

  export type AggregateJournalEntry = {
    _count: JournalEntryCountAggregateOutputType | null
    _avg: JournalEntryAvgAggregateOutputType | null
    _sum: JournalEntrySumAggregateOutputType | null
    _min: JournalEntryMinAggregateOutputType | null
    _max: JournalEntryMaxAggregateOutputType | null
  }

  export type JournalEntryAvgAggregateOutputType = {
    id: number | null
  }

  export type JournalEntrySumAggregateOutputType = {
    id: number | null
  }

  export type JournalEntryMinAggregateOutputType = {
    id: number | null
    date: Date | null
    description: string | null
    status: $Enums.JournalEntryStatus | null
    rejectionReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JournalEntryMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    description: string | null
    status: $Enums.JournalEntryStatus | null
    rejectionReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JournalEntryCountAggregateOutputType = {
    id: number
    date: number
    description: number
    status: number
    rejectionReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JournalEntryAvgAggregateInputType = {
    id?: true
  }

  export type JournalEntrySumAggregateInputType = {
    id?: true
  }

  export type JournalEntryMinAggregateInputType = {
    id?: true
    date?: true
    description?: true
    status?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JournalEntryMaxAggregateInputType = {
    id?: true
    date?: true
    description?: true
    status?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JournalEntryCountAggregateInputType = {
    id?: true
    date?: true
    description?: true
    status?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JournalEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JournalEntry to aggregate.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned JournalEntries
    **/
    _count?: true | JournalEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: JournalEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: JournalEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: JournalEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: JournalEntryMaxAggregateInputType
  }

  export type GetJournalEntryAggregateType<T extends JournalEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateJournalEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJournalEntry[P]>
      : GetScalarType<T[P], AggregateJournalEntry[P]>
  }




  export type JournalEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalEntryWhereInput
    orderBy?: JournalEntryOrderByWithAggregationInput | JournalEntryOrderByWithAggregationInput[]
    by: JournalEntryScalarFieldEnum[] | JournalEntryScalarFieldEnum
    having?: JournalEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JournalEntryCountAggregateInputType | true
    _avg?: JournalEntryAvgAggregateInputType
    _sum?: JournalEntrySumAggregateInputType
    _min?: JournalEntryMinAggregateInputType
    _max?: JournalEntryMaxAggregateInputType
  }

  export type JournalEntryGroupByOutputType = {
    id: number
    date: Date
    description: string
    status: $Enums.JournalEntryStatus
    rejectionReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: JournalEntryCountAggregateOutputType | null
    _avg: JournalEntryAvgAggregateOutputType | null
    _sum: JournalEntrySumAggregateOutputType | null
    _min: JournalEntryMinAggregateOutputType | null
    _max: JournalEntryMaxAggregateOutputType | null
  }

  type GetJournalEntryGroupByPayload<T extends JournalEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JournalEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JournalEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JournalEntryGroupByOutputType[P]>
            : GetScalarType<T[P], JournalEntryGroupByOutputType[P]>
        }
      >
    >


  export type JournalEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    description?: boolean
    status?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lines?: boolean | JournalEntry$linesArgs<ExtArgs>
    _count?: boolean | JournalEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntry"]>

  export type JournalEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    description?: boolean
    status?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["journalEntry"]>

  export type JournalEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    description?: boolean
    status?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["journalEntry"]>

  export type JournalEntrySelectScalar = {
    id?: boolean
    date?: boolean
    description?: boolean
    status?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JournalEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "description" | "status" | "rejectionReason" | "createdAt" | "updatedAt", ExtArgs["result"]["journalEntry"]>
  export type JournalEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | JournalEntry$linesArgs<ExtArgs>
    _count?: boolean | JournalEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JournalEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type JournalEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JournalEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JournalEntry"
    objects: {
      lines: Prisma.$JournalEntryLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      description: string
      status: $Enums.JournalEntryStatus
      rejectionReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["journalEntry"]>
    composites: {}
  }

  type JournalEntryGetPayload<S extends boolean | null | undefined | JournalEntryDefaultArgs> = $Result.GetResult<Prisma.$JournalEntryPayload, S>

  type JournalEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JournalEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JournalEntryCountAggregateInputType | true
    }

  export interface JournalEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JournalEntry'], meta: { name: 'JournalEntry' } }
    /**
     * Find zero or one JournalEntry that matches the filter.
     * @param {JournalEntryFindUniqueArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JournalEntryFindUniqueArgs>(args: SelectSubset<T, JournalEntryFindUniqueArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JournalEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JournalEntryFindUniqueOrThrowArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JournalEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, JournalEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JournalEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindFirstArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JournalEntryFindFirstArgs>(args?: SelectSubset<T, JournalEntryFindFirstArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JournalEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindFirstOrThrowArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JournalEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, JournalEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JournalEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JournalEntries
     * const journalEntries = await prisma.journalEntry.findMany()
     *
     * // Get first 10 JournalEntries
     * const journalEntries = await prisma.journalEntry.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const journalEntryWithIdOnly = await prisma.journalEntry.findMany({ select: { id: true } })
     *
     */
    findMany<T extends JournalEntryFindManyArgs>(args?: SelectSubset<T, JournalEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JournalEntry.
     * @param {JournalEntryCreateArgs} args - Arguments to create a JournalEntry.
     * @example
     * // Create one JournalEntry
     * const JournalEntry = await prisma.journalEntry.create({
     *   data: {
     *     // ... data to create a JournalEntry
     *   }
     * })
     *
     */
    create<T extends JournalEntryCreateArgs>(args: SelectSubset<T, JournalEntryCreateArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JournalEntries.
     * @param {JournalEntryCreateManyArgs} args - Arguments to create many JournalEntries.
     * @example
     * // Create many JournalEntries
     * const journalEntry = await prisma.journalEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JournalEntryCreateManyArgs>(args?: SelectSubset<T, JournalEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JournalEntries and returns the data saved in the database.
     * @param {JournalEntryCreateManyAndReturnArgs} args - Arguments to create many JournalEntries.
     * @example
     * // Create many JournalEntries
     * const journalEntry = await prisma.journalEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many JournalEntries and only return the `id`
     * const journalEntryWithIdOnly = await prisma.journalEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends JournalEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, JournalEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JournalEntry.
     * @param {JournalEntryDeleteArgs} args - Arguments to delete one JournalEntry.
     * @example
     * // Delete one JournalEntry
     * const JournalEntry = await prisma.journalEntry.delete({
     *   where: {
     *     // ... filter to delete one JournalEntry
     *   }
     * })
     *
     */
    delete<T extends JournalEntryDeleteArgs>(args: SelectSubset<T, JournalEntryDeleteArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JournalEntry.
     * @param {JournalEntryUpdateArgs} args - Arguments to update one JournalEntry.
     * @example
     * // Update one JournalEntry
     * const journalEntry = await prisma.journalEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JournalEntryUpdateArgs>(args: SelectSubset<T, JournalEntryUpdateArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JournalEntries.
     * @param {JournalEntryDeleteManyArgs} args - Arguments to filter JournalEntries to delete.
     * @example
     * // Delete a few JournalEntries
     * const { count } = await prisma.journalEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JournalEntryDeleteManyArgs>(args?: SelectSubset<T, JournalEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JournalEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JournalEntries
     * const journalEntry = await prisma.journalEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JournalEntryUpdateManyArgs>(args: SelectSubset<T, JournalEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JournalEntries and returns the data updated in the database.
     * @param {JournalEntryUpdateManyAndReturnArgs} args - Arguments to update many JournalEntries.
     * @example
     * // Update many JournalEntries
     * const journalEntry = await prisma.journalEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more JournalEntries and only return the `id`
     * const journalEntryWithIdOnly = await prisma.journalEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends JournalEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, JournalEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JournalEntry.
     * @param {JournalEntryUpsertArgs} args - Arguments to update or create a JournalEntry.
     * @example
     * // Update or create a JournalEntry
     * const journalEntry = await prisma.journalEntry.upsert({
     *   create: {
     *     // ... data to create a JournalEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JournalEntry we want to update
     *   }
     * })
     */
    upsert<T extends JournalEntryUpsertArgs>(args: SelectSubset<T, JournalEntryUpsertArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JournalEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryCountArgs} args - Arguments to filter JournalEntries to count.
     * @example
     * // Count the number of JournalEntries
     * const count = await prisma.journalEntry.count({
     *   where: {
     *     // ... the filter for the JournalEntries we want to count
     *   }
     * })
    **/
    count<T extends JournalEntryCountArgs>(
      args?: Subset<T, JournalEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JournalEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JournalEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JournalEntryAggregateArgs>(args: Subset<T, JournalEntryAggregateArgs>): Prisma.PrismaPromise<GetJournalEntryAggregateType<T>>

    /**
     * Group by JournalEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<
      T extends JournalEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JournalEntryGroupByArgs['orderBy'] }
        : { orderBy?: JournalEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JournalEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJournalEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JournalEntry model
   */
  readonly fields: JournalEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JournalEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JournalEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lines<T extends JournalEntry$linesArgs<ExtArgs> = {}>(args?: Subset<T, JournalEntry$linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JournalEntry model
   */
  interface JournalEntryFieldRefs {
    readonly id: FieldRef<"JournalEntry", 'Int'>
    readonly date: FieldRef<"JournalEntry", 'DateTime'>
    readonly description: FieldRef<"JournalEntry", 'String'>
    readonly status: FieldRef<"JournalEntry", 'JournalEntryStatus'>
    readonly rejectionReason: FieldRef<"JournalEntry", 'String'>
    readonly createdAt: FieldRef<"JournalEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"JournalEntry", 'DateTime'>
  }


  // Custom InputTypes
  /**
   * JournalEntry findUnique
   */
  export type JournalEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry findUniqueOrThrow
   */
  export type JournalEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry findFirst
   */
  export type JournalEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JournalEntries.
     */
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry findFirstOrThrow
   */
  export type JournalEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JournalEntries.
     */
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry findMany
   */
  export type JournalEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntries to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry create
   */
  export type JournalEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a JournalEntry.
     */
    data: XOR<JournalEntryCreateInput, JournalEntryUncheckedCreateInput>
  }

  /**
   * JournalEntry createMany
   */
  export type JournalEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JournalEntries.
     */
    data: JournalEntryCreateManyInput | JournalEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JournalEntry createManyAndReturn
   */
  export type JournalEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * The data used to create many JournalEntries.
     */
    data: JournalEntryCreateManyInput | JournalEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JournalEntry update
   */
  export type JournalEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a JournalEntry.
     */
    data: XOR<JournalEntryUpdateInput, JournalEntryUncheckedUpdateInput>
    /**
     * Choose, which JournalEntry to update.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry updateMany
   */
  export type JournalEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JournalEntries.
     */
    data: XOR<JournalEntryUpdateManyMutationInput, JournalEntryUncheckedUpdateManyInput>
    /**
     * Filter which JournalEntries to update
     */
    where?: JournalEntryWhereInput
    /**
     * Limit how many JournalEntries to update.
     */
    limit?: number
  }

  /**
   * JournalEntry updateManyAndReturn
   */
  export type JournalEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * The data used to update JournalEntries.
     */
    data: XOR<JournalEntryUpdateManyMutationInput, JournalEntryUncheckedUpdateManyInput>
    /**
     * Filter which JournalEntries to update
     */
    where?: JournalEntryWhereInput
    /**
     * Limit how many JournalEntries to update.
     */
    limit?: number
  }

  /**
   * JournalEntry upsert
   */
  export type JournalEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the JournalEntry to update in case it exists.
     */
    where: JournalEntryWhereUniqueInput
    /**
     * In case the JournalEntry found by the `where` argument doesn't exist, create a new JournalEntry with this data.
     */
    create: XOR<JournalEntryCreateInput, JournalEntryUncheckedCreateInput>
    /**
     * In case the JournalEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JournalEntryUpdateInput, JournalEntryUncheckedUpdateInput>
  }

  /**
   * JournalEntry delete
   */
  export type JournalEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter which JournalEntry to delete.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry deleteMany
   */
  export type JournalEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JournalEntries to delete
     */
    where?: JournalEntryWhereInput
    /**
     * Limit how many JournalEntries to delete.
     */
    limit?: number
  }

  /**
   * JournalEntry.lines
   */
  export type JournalEntry$linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryLine
     */
    select?: JournalEntryLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryLine
     */
    omit?: JournalEntryLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryLineInclude<ExtArgs> | null
    where?: JournalEntryLineWhereInput
    orderBy?: JournalEntryLineOrderByWithRelationInput | JournalEntryLineOrderByWithRelationInput[]
    cursor?: JournalEntryLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JournalEntryLineScalarFieldEnum | JournalEntryLineScalarFieldEnum[]
  }

  /**
   * JournalEntry without action
   */
  export type JournalEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
  }


  /**
   * Model JournalEntryLine
   */

  export type AggregateJournalEntryLine = {
    _count: JournalEntryLineCountAggregateOutputType | null
    _avg: JournalEntryLineAvgAggregateOutputType | null
    _sum: JournalEntryLineSumAggregateOutputType | null
    _min: JournalEntryLineMinAggregateOutputType | null
    _max: JournalEntryLineMaxAggregateOutputType | null
  }

  export type JournalEntryLineAvgAggregateOutputType = {
    id: number | null
    journalEntryId: number | null
    accountId: number | null
    costCenterId: number | null
    amount: number | null
  }

  export type JournalEntryLineSumAggregateOutputType = {
    id: number | null
    journalEntryId: number | null
    accountId: number | null
    costCenterId: number | null
    amount: number | null
  }

  export type JournalEntryLineMinAggregateOutputType = {
    id: number | null
    journalEntryId: number | null
    accountId: number | null
    costCenterId: number | null
    amount: number | null
    isDebit: boolean | null
  }

  export type JournalEntryLineMaxAggregateOutputType = {
    id: number | null
    journalEntryId: number | null
    accountId: number | null
    costCenterId: number | null
    amount: number | null
    isDebit: boolean | null
  }

  export type JournalEntryLineCountAggregateOutputType = {
    id: number
    journalEntryId: number
    accountId: number
    costCenterId: number
    amount: number
    isDebit: number
    _all: number
  }


  export type JournalEntryLineAvgAggregateInputType = {
    id?: true
    journalEntryId?: true
    accountId?: true
    costCenterId?: true
    amount?: true
  }

  export type JournalEntryLineSumAggregateInputType = {
    id?: true
    journalEntryId?: true
    accountId?: true
    costCenterId?: true
    amount?: true
  }

  export type JournalEntryLineMinAggregateInputType = {
    id?: true
    journalEntryId?: true
    accountId?: true
    costCenterId?: true
    amount?: true
    isDebit?: true
  }

  export type JournalEntryLineMaxAggregateInputType = {
    id?: true
    journalEntryId?: true
    accountId?: true
    costCenterId?: true
    amount?: true
    isDebit?: true
  }

  export type JournalEntryLineCountAggregateInputType = {
    id?: true
    journalEntryId?: true
    accountId?: true
    costCenterId?: true
    amount?: true
    isDebit?: true
    _all?: true
  }

  export type JournalEntryLineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JournalEntryLine to aggregate.
     */
    where?: JournalEntryLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JournalEntryLines to fetch.
     */
    orderBy?: JournalEntryLineOrderByWithRelationInput | JournalEntryLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: JournalEntryLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JournalEntryLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JournalEntryLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned JournalEntryLines
    **/
    _count?: true | JournalEntryLineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: JournalEntryLineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: JournalEntryLineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: JournalEntryLineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: JournalEntryLineMaxAggregateInputType
  }

  export type GetJournalEntryLineAggregateType<T extends JournalEntryLineAggregateArgs> = {
        [P in keyof T & keyof AggregateJournalEntryLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJournalEntryLine[P]>
      : GetScalarType<T[P], AggregateJournalEntryLine[P]>
  }




  export type JournalEntryLineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalEntryLineWhereInput
    orderBy?: JournalEntryLineOrderByWithAggregationInput | JournalEntryLineOrderByWithAggregationInput[]
    by: JournalEntryLineScalarFieldEnum[] | JournalEntryLineScalarFieldEnum
    having?: JournalEntryLineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JournalEntryLineCountAggregateInputType | true
    _avg?: JournalEntryLineAvgAggregateInputType
    _sum?: JournalEntryLineSumAggregateInputType
    _min?: JournalEntryLineMinAggregateInputType
    _max?: JournalEntryLineMaxAggregateInputType
  }

  export type JournalEntryLineGroupByOutputType = {
    id: number
    journalEntryId: number
    accountId: number
    costCenterId: number | null
    amount: number
    isDebit: boolean
    _count: JournalEntryLineCountAggregateOutputType | null
    _avg: JournalEntryLineAvgAggregateOutputType | null
    _sum: JournalEntryLineSumAggregateOutputType | null
    _min: JournalEntryLineMinAggregateOutputType | null
    _max: JournalEntryLineMaxAggregateOutputType | null
  }

  type GetJournalEntryLineGroupByPayload<T extends JournalEntryLineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JournalEntryLineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JournalEntryLineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JournalEntryLineGroupByOutputType[P]>
            : GetScalarType<T[P], JournalEntryLineGroupByOutputType[P]>
        }
      >
    >


  export type JournalEntryLineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journalEntryId?: boolean
    accountId?: boolean
    costCenterId?: boolean
    amount?: boolean
    isDebit?: boolean
    journalEntry?: boolean | JournalEntryDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    costCenter?: boolean | JournalEntryLine$costCenterArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntryLine"]>

  export type JournalEntryLineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journalEntryId?: boolean
    accountId?: boolean
    costCenterId?: boolean
    amount?: boolean
    isDebit?: boolean
    journalEntry?: boolean | JournalEntryDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    costCenter?: boolean | JournalEntryLine$costCenterArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntryLine"]>

  export type JournalEntryLineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journalEntryId?: boolean
    accountId?: boolean
    costCenterId?: boolean
    amount?: boolean
    isDebit?: boolean
    journalEntry?: boolean | JournalEntryDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    costCenter?: boolean | JournalEntryLine$costCenterArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntryLine"]>

  export type JournalEntryLineSelectScalar = {
    id?: boolean
    journalEntryId?: boolean
    accountId?: boolean
    costCenterId?: boolean
    amount?: boolean
    isDebit?: boolean
  }

  export type JournalEntryLineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "journalEntryId" | "accountId" | "costCenterId" | "amount" | "isDebit", ExtArgs["result"]["journalEntryLine"]>
  export type JournalEntryLineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journalEntry?: boolean | JournalEntryDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    costCenter?: boolean | JournalEntryLine$costCenterArgs<ExtArgs>
  }
  export type JournalEntryLineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journalEntry?: boolean | JournalEntryDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    costCenter?: boolean | JournalEntryLine$costCenterArgs<ExtArgs>
  }
  export type JournalEntryLineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journalEntry?: boolean | JournalEntryDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    costCenter?: boolean | JournalEntryLine$costCenterArgs<ExtArgs>
  }

  export type $JournalEntryLinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JournalEntryLine"
    objects: {
      journalEntry: Prisma.$JournalEntryPayload<ExtArgs>
      account: Prisma.$AccountPayload<ExtArgs>
      costCenter: Prisma.$CostCenterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      journalEntryId: number
      accountId: number
      costCenterId: number | null
      amount: number
      isDebit: boolean
    }, ExtArgs["result"]["journalEntryLine"]>
    composites: {}
  }

  type JournalEntryLineGetPayload<S extends boolean | null | undefined | JournalEntryLineDefaultArgs> = $Result.GetResult<Prisma.$JournalEntryLinePayload, S>

  type JournalEntryLineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JournalEntryLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JournalEntryLineCountAggregateInputType | true
    }

  export interface JournalEntryLineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JournalEntryLine'], meta: { name: 'JournalEntryLine' } }
    /**
     * Find zero or one JournalEntryLine that matches the filter.
     * @param {JournalEntryLineFindUniqueArgs} args - Arguments to find a JournalEntryLine
     * @example
     * // Get one JournalEntryLine
     * const journalEntryLine = await prisma.journalEntryLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JournalEntryLineFindUniqueArgs>(args: SelectSubset<T, JournalEntryLineFindUniqueArgs<ExtArgs>>): Prisma__JournalEntryLineClient<$Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JournalEntryLine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JournalEntryLineFindUniqueOrThrowArgs} args - Arguments to find a JournalEntryLine
     * @example
     * // Get one JournalEntryLine
     * const journalEntryLine = await prisma.journalEntryLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JournalEntryLineFindUniqueOrThrowArgs>(args: SelectSubset<T, JournalEntryLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JournalEntryLineClient<$Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JournalEntryLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryLineFindFirstArgs} args - Arguments to find a JournalEntryLine
     * @example
     * // Get one JournalEntryLine
     * const journalEntryLine = await prisma.journalEntryLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JournalEntryLineFindFirstArgs>(args?: SelectSubset<T, JournalEntryLineFindFirstArgs<ExtArgs>>): Prisma__JournalEntryLineClient<$Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JournalEntryLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryLineFindFirstOrThrowArgs} args - Arguments to find a JournalEntryLine
     * @example
     * // Get one JournalEntryLine
     * const journalEntryLine = await prisma.journalEntryLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JournalEntryLineFindFirstOrThrowArgs>(args?: SelectSubset<T, JournalEntryLineFindFirstOrThrowArgs<ExtArgs>>): Prisma__JournalEntryLineClient<$Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JournalEntryLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JournalEntryLines
     * const journalEntryLines = await prisma.journalEntryLine.findMany()
     *
     * // Get first 10 JournalEntryLines
     * const journalEntryLines = await prisma.journalEntryLine.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const journalEntryLineWithIdOnly = await prisma.journalEntryLine.findMany({ select: { id: true } })
     *
     */
    findMany<T extends JournalEntryLineFindManyArgs>(args?: SelectSubset<T, JournalEntryLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JournalEntryLine.
     * @param {JournalEntryLineCreateArgs} args - Arguments to create a JournalEntryLine.
     * @example
     * // Create one JournalEntryLine
     * const JournalEntryLine = await prisma.journalEntryLine.create({
     *   data: {
     *     // ... data to create a JournalEntryLine
     *   }
     * })
     *
     */
    create<T extends JournalEntryLineCreateArgs>(args: SelectSubset<T, JournalEntryLineCreateArgs<ExtArgs>>): Prisma__JournalEntryLineClient<$Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JournalEntryLines.
     * @param {JournalEntryLineCreateManyArgs} args - Arguments to create many JournalEntryLines.
     * @example
     * // Create many JournalEntryLines
     * const journalEntryLine = await prisma.journalEntryLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JournalEntryLineCreateManyArgs>(args?: SelectSubset<T, JournalEntryLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JournalEntryLines and returns the data saved in the database.
     * @param {JournalEntryLineCreateManyAndReturnArgs} args - Arguments to create many JournalEntryLines.
     * @example
     * // Create many JournalEntryLines
     * const journalEntryLine = await prisma.journalEntryLine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many JournalEntryLines and only return the `id`
     * const journalEntryLineWithIdOnly = await prisma.journalEntryLine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends JournalEntryLineCreateManyAndReturnArgs>(args?: SelectSubset<T, JournalEntryLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JournalEntryLine.
     * @param {JournalEntryLineDeleteArgs} args - Arguments to delete one JournalEntryLine.
     * @example
     * // Delete one JournalEntryLine
     * const JournalEntryLine = await prisma.journalEntryLine.delete({
     *   where: {
     *     // ... filter to delete one JournalEntryLine
     *   }
     * })
     *
     */
    delete<T extends JournalEntryLineDeleteArgs>(args: SelectSubset<T, JournalEntryLineDeleteArgs<ExtArgs>>): Prisma__JournalEntryLineClient<$Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JournalEntryLine.
     * @param {JournalEntryLineUpdateArgs} args - Arguments to update one JournalEntryLine.
     * @example
     * // Update one JournalEntryLine
     * const journalEntryLine = await prisma.journalEntryLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JournalEntryLineUpdateArgs>(args: SelectSubset<T, JournalEntryLineUpdateArgs<ExtArgs>>): Prisma__JournalEntryLineClient<$Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JournalEntryLines.
     * @param {JournalEntryLineDeleteManyArgs} args - Arguments to filter JournalEntryLines to delete.
     * @example
     * // Delete a few JournalEntryLines
     * const { count } = await prisma.journalEntryLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JournalEntryLineDeleteManyArgs>(args?: SelectSubset<T, JournalEntryLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JournalEntryLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JournalEntryLines
     * const journalEntryLine = await prisma.journalEntryLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JournalEntryLineUpdateManyArgs>(args: SelectSubset<T, JournalEntryLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JournalEntryLines and returns the data updated in the database.
     * @param {JournalEntryLineUpdateManyAndReturnArgs} args - Arguments to update many JournalEntryLines.
     * @example
     * // Update many JournalEntryLines
     * const journalEntryLine = await prisma.journalEntryLine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more JournalEntryLines and only return the `id`
     * const journalEntryLineWithIdOnly = await prisma.journalEntryLine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends JournalEntryLineUpdateManyAndReturnArgs>(args: SelectSubset<T, JournalEntryLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JournalEntryLine.
     * @param {JournalEntryLineUpsertArgs} args - Arguments to update or create a JournalEntryLine.
     * @example
     * // Update or create a JournalEntryLine
     * const journalEntryLine = await prisma.journalEntryLine.upsert({
     *   create: {
     *     // ... data to create a JournalEntryLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JournalEntryLine we want to update
     *   }
     * })
     */
    upsert<T extends JournalEntryLineUpsertArgs>(args: SelectSubset<T, JournalEntryLineUpsertArgs<ExtArgs>>): Prisma__JournalEntryLineClient<$Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JournalEntryLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryLineCountArgs} args - Arguments to filter JournalEntryLines to count.
     * @example
     * // Count the number of JournalEntryLines
     * const count = await prisma.journalEntryLine.count({
     *   where: {
     *     // ... the filter for the JournalEntryLines we want to count
     *   }
     * })
    **/
    count<T extends JournalEntryLineCountArgs>(
      args?: Subset<T, JournalEntryLineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JournalEntryLineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JournalEntryLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JournalEntryLineAggregateArgs>(args: Subset<T, JournalEntryLineAggregateArgs>): Prisma.PrismaPromise<GetJournalEntryLineAggregateType<T>>

    /**
     * Group by JournalEntryLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryLineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<
      T extends JournalEntryLineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JournalEntryLineGroupByArgs['orderBy'] }
        : { orderBy?: JournalEntryLineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JournalEntryLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJournalEntryLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JournalEntryLine model
   */
  readonly fields: JournalEntryLineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JournalEntryLine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JournalEntryLineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    journalEntry<T extends JournalEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JournalEntryDefaultArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    costCenter<T extends JournalEntryLine$costCenterArgs<ExtArgs> = {}>(args?: Subset<T, JournalEntryLine$costCenterArgs<ExtArgs>>): Prisma__CostCenterClient<$Result.GetResult<Prisma.$CostCenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JournalEntryLine model
   */
  interface JournalEntryLineFieldRefs {
    readonly id: FieldRef<"JournalEntryLine", 'Int'>
    readonly journalEntryId: FieldRef<"JournalEntryLine", 'Int'>
    readonly accountId: FieldRef<"JournalEntryLine", 'Int'>
    readonly costCenterId: FieldRef<"JournalEntryLine", 'Int'>
    readonly amount: FieldRef<"JournalEntryLine", 'Float'>
    readonly isDebit: FieldRef<"JournalEntryLine", 'Boolean'>
  }


  // Custom InputTypes
  /**
   * JournalEntryLine findUnique
   */
  export type JournalEntryLineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryLine
     */
    select?: JournalEntryLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryLine
     */
    omit?: JournalEntryLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryLineInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntryLine to fetch.
     */
    where: JournalEntryLineWhereUniqueInput
  }

  /**
   * JournalEntryLine findUniqueOrThrow
   */
  export type JournalEntryLineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryLine
     */
    select?: JournalEntryLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryLine
     */
    omit?: JournalEntryLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryLineInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntryLine to fetch.
     */
    where: JournalEntryLineWhereUniqueInput
  }

  /**
   * JournalEntryLine findFirst
   */
  export type JournalEntryLineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryLine
     */
    select?: JournalEntryLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryLine
     */
    omit?: JournalEntryLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryLineInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntryLine to fetch.
     */
    where?: JournalEntryLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JournalEntryLines to fetch.
     */
    orderBy?: JournalEntryLineOrderByWithRelationInput | JournalEntryLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JournalEntryLines.
     */
    cursor?: JournalEntryLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JournalEntryLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JournalEntryLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JournalEntryLines.
     */
    distinct?: JournalEntryLineScalarFieldEnum | JournalEntryLineScalarFieldEnum[]
  }

  /**
   * JournalEntryLine findFirstOrThrow
   */
  export type JournalEntryLineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryLine
     */
    select?: JournalEntryLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryLine
     */
    omit?: JournalEntryLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryLineInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntryLine to fetch.
     */
    where?: JournalEntryLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JournalEntryLines to fetch.
     */
    orderBy?: JournalEntryLineOrderByWithRelationInput | JournalEntryLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JournalEntryLines.
     */
    cursor?: JournalEntryLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JournalEntryLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JournalEntryLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JournalEntryLines.
     */
    distinct?: JournalEntryLineScalarFieldEnum | JournalEntryLineScalarFieldEnum[]
  }

  /**
   * JournalEntryLine findMany
   */
  export type JournalEntryLineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryLine
     */
    select?: JournalEntryLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryLine
     */
    omit?: JournalEntryLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryLineInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntryLines to fetch.
     */
    where?: JournalEntryLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JournalEntryLines to fetch.
     */
    orderBy?: JournalEntryLineOrderByWithRelationInput | JournalEntryLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing JournalEntryLines.
     */
    cursor?: JournalEntryLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JournalEntryLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JournalEntryLines.
     */
    skip?: number
    distinct?: JournalEntryLineScalarFieldEnum | JournalEntryLineScalarFieldEnum[]
  }

  /**
   * JournalEntryLine create
   */
  export type JournalEntryLineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryLine
     */
    select?: JournalEntryLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryLine
     */
    omit?: JournalEntryLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryLineInclude<ExtArgs> | null
    /**
     * The data needed to create a JournalEntryLine.
     */
    data: XOR<JournalEntryLineCreateInput, JournalEntryLineUncheckedCreateInput>
  }

  /**
   * JournalEntryLine createMany
   */
  export type JournalEntryLineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JournalEntryLines.
     */
    data: JournalEntryLineCreateManyInput | JournalEntryLineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JournalEntryLine createManyAndReturn
   */
  export type JournalEntryLineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryLine
     */
    select?: JournalEntryLineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryLine
     */
    omit?: JournalEntryLineOmit<ExtArgs> | null
    /**
     * The data used to create many JournalEntryLines.
     */
    data: JournalEntryLineCreateManyInput | JournalEntryLineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryLineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JournalEntryLine update
   */
  export type JournalEntryLineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryLine
     */
    select?: JournalEntryLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryLine
     */
    omit?: JournalEntryLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryLineInclude<ExtArgs> | null
    /**
     * The data needed to update a JournalEntryLine.
     */
    data: XOR<JournalEntryLineUpdateInput, JournalEntryLineUncheckedUpdateInput>
    /**
     * Choose, which JournalEntryLine to update.
     */
    where: JournalEntryLineWhereUniqueInput
  }

  /**
   * JournalEntryLine updateMany
   */
  export type JournalEntryLineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JournalEntryLines.
     */
    data: XOR<JournalEntryLineUpdateManyMutationInput, JournalEntryLineUncheckedUpdateManyInput>
    /**
     * Filter which JournalEntryLines to update
     */
    where?: JournalEntryLineWhereInput
    /**
     * Limit how many JournalEntryLines to update.
     */
    limit?: number
  }

  /**
   * JournalEntryLine updateManyAndReturn
   */
  export type JournalEntryLineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryLine
     */
    select?: JournalEntryLineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryLine
     */
    omit?: JournalEntryLineOmit<ExtArgs> | null
    /**
     * The data used to update JournalEntryLines.
     */
    data: XOR<JournalEntryLineUpdateManyMutationInput, JournalEntryLineUncheckedUpdateManyInput>
    /**
     * Filter which JournalEntryLines to update
     */
    where?: JournalEntryLineWhereInput
    /**
     * Limit how many JournalEntryLines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryLineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JournalEntryLine upsert
   */
  export type JournalEntryLineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryLine
     */
    select?: JournalEntryLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryLine
     */
    omit?: JournalEntryLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryLineInclude<ExtArgs> | null
    /**
     * The filter to search for the JournalEntryLine to update in case it exists.
     */
    where: JournalEntryLineWhereUniqueInput
    /**
     * In case the JournalEntryLine found by the `where` argument doesn't exist, create a new JournalEntryLine with this data.
     */
    create: XOR<JournalEntryLineCreateInput, JournalEntryLineUncheckedCreateInput>
    /**
     * In case the JournalEntryLine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JournalEntryLineUpdateInput, JournalEntryLineUncheckedUpdateInput>
  }

  /**
   * JournalEntryLine delete
   */
  export type JournalEntryLineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryLine
     */
    select?: JournalEntryLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryLine
     */
    omit?: JournalEntryLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryLineInclude<ExtArgs> | null
    /**
     * Filter which JournalEntryLine to delete.
     */
    where: JournalEntryLineWhereUniqueInput
  }

  /**
   * JournalEntryLine deleteMany
   */
  export type JournalEntryLineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JournalEntryLines to delete
     */
    where?: JournalEntryLineWhereInput
    /**
     * Limit how many JournalEntryLines to delete.
     */
    limit?: number
  }

  /**
   * JournalEntryLine.costCenter
   */
  export type JournalEntryLine$costCenterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostCenter
     */
    select?: CostCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostCenter
     */
    omit?: CostCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostCenterInclude<ExtArgs> | null
    where?: CostCenterWhereInput
  }

  /**
   * JournalEntryLine without action
   */
  export type JournalEntryLineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryLine
     */
    select?: JournalEntryLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryLine
     */
    omit?: JournalEntryLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryLineInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogAvgAggregateOutputType = {
    id: number | null
    entityId: number | null
  }

  export type AuditLogSumAggregateOutputType = {
    id: number | null
    entityId: number | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: number | null
    action: string | null
    entityId: number | null
    entityType: string | null
    userId: string | null
    details: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: number | null
    action: string | null
    entityId: number | null
    entityType: string | null
    userId: string | null
    details: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    action: number
    entityId: number
    entityType: number
    userId: number
    details: number
    createdAt: number
    _all: number
  }


  export type AuditLogAvgAggregateInputType = {
    id?: true
    entityId?: true
  }

  export type AuditLogSumAggregateInputType = {
    id?: true
    entityId?: true
  }

  export type AuditLogMinAggregateInputType = {
    id?: true
    action?: true
    entityId?: true
    entityType?: true
    userId?: true
    details?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    action?: true
    entityId?: true
    entityType?: true
    userId?: true
    details?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    action?: true
    entityId?: true
    entityType?: true
    userId?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AuditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AuditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _avg?: AuditLogAvgAggregateInputType
    _sum?: AuditLogSumAggregateInputType
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: number
    action: string
    entityId: number
    entityType: string
    userId: string | null
    details: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entityId?: boolean
    entityType?: boolean
    userId?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entityId?: boolean
    entityType?: boolean
    userId?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entityId?: boolean
    entityType?: boolean
    userId?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    action?: boolean
    entityId?: boolean
    entityType?: boolean
    userId?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "entityId" | "entityType" | "userId" | "details" | "createdAt", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      action: string
      entityId: number
      entityType: string
      userId: string | null
      details: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     *
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     *
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     *
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'Int'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'Int'>
    readonly entityType: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly details: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }


  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.ContactType | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.ContactType | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    name: number
    type: number
    email: number
    phone: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: number
    name: string
    type: $Enums.ContactType
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoices?: boolean | Contact$invoicesArgs<ExtArgs>
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "email" | "phone" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["contact"]>
  export type ContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | Contact$invoicesArgs<ExtArgs>
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: $Enums.ContactType
      email: string | null
      phone: string | null
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     *
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     *
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     *
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoices<T extends Contact$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Contact$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'Int'>
    readonly name: FieldRef<"Contact", 'String'>
    readonly type: FieldRef<"Contact", 'ContactType'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly phone: FieldRef<"Contact", 'String'>
    readonly address: FieldRef<"Contact", 'String'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"Contact", 'DateTime'>
  }


  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact.invoices
   */
  export type Contact$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    id: number | null
    contactId: number | null
    totalAmount: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    id: number | null
    contactId: number | null
    totalAmount: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: number | null
    invoiceNo: string | null
    type: $Enums.InvoiceType | null
    contactId: number | null
    date: Date | null
    dueDate: Date | null
    status: $Enums.InvoiceStatus | null
    totalAmount: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: number | null
    invoiceNo: string | null
    type: $Enums.InvoiceType | null
    contactId: number | null
    date: Date | null
    dueDate: Date | null
    status: $Enums.InvoiceStatus | null
    totalAmount: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    invoiceNo: number
    type: number
    contactId: number
    date: number
    dueDate: number
    status: number
    totalAmount: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    id?: true
    contactId?: true
    totalAmount?: true
  }

  export type InvoiceSumAggregateInputType = {
    id?: true
    contactId?: true
    totalAmount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    invoiceNo?: true
    type?: true
    contactId?: true
    date?: true
    dueDate?: true
    status?: true
    totalAmount?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    invoiceNo?: true
    type?: true
    contactId?: true
    date?: true
    dueDate?: true
    status?: true
    totalAmount?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    invoiceNo?: true
    type?: true
    contactId?: true
    date?: true
    dueDate?: true
    status?: true
    totalAmount?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: number
    invoiceNo: string
    type: $Enums.InvoiceType
    contactId: number
    date: Date
    dueDate: Date
    status: $Enums.InvoiceStatus
    totalAmount: number
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNo?: boolean
    type?: boolean
    contactId?: boolean
    date?: boolean
    dueDate?: boolean
    status?: boolean
    totalAmount?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNo?: boolean
    type?: boolean
    contactId?: boolean
    date?: boolean
    dueDate?: boolean
    status?: boolean
    totalAmount?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNo?: boolean
    type?: boolean
    contactId?: boolean
    date?: boolean
    dueDate?: boolean
    status?: boolean
    totalAmount?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    invoiceNo?: boolean
    type?: boolean
    contactId?: boolean
    date?: boolean
    dueDate?: boolean
    status?: boolean
    totalAmount?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceNo" | "type" | "contactId" | "date" | "dueDate" | "status" | "totalAmount" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      contact: Prisma.$ContactPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      invoiceNo: string
      type: $Enums.InvoiceType
      contactId: number
      date: Date
      dueDate: Date
      status: $Enums.InvoiceStatus
      totalAmount: number
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     *
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     *
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     *
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     *
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contact<T extends ContactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContactDefaultArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'Int'>
    readonly invoiceNo: FieldRef<"Invoice", 'String'>
    readonly type: FieldRef<"Invoice", 'InvoiceType'>
    readonly contactId: FieldRef<"Invoice", 'Int'>
    readonly date: FieldRef<"Invoice", 'DateTime'>
    readonly dueDate: FieldRef<"Invoice", 'DateTime'>
    readonly status: FieldRef<"Invoice", 'InvoiceStatus'>
    readonly totalAmount: FieldRef<"Invoice", 'Float'>
    readonly notes: FieldRef<"Invoice", 'String'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly updatedAt: FieldRef<"Invoice", 'DateTime'>
  }


  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model CostCenter
   */

  export type AggregateCostCenter = {
    _count: CostCenterCountAggregateOutputType | null
    _avg: CostCenterAvgAggregateOutputType | null
    _sum: CostCenterSumAggregateOutputType | null
    _min: CostCenterMinAggregateOutputType | null
    _max: CostCenterMaxAggregateOutputType | null
  }

  export type CostCenterAvgAggregateOutputType = {
    id: number | null
  }

  export type CostCenterSumAggregateOutputType = {
    id: number | null
  }

  export type CostCenterMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CostCenterMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CostCenterCountAggregateOutputType = {
    id: number
    code: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CostCenterAvgAggregateInputType = {
    id?: true
  }

  export type CostCenterSumAggregateInputType = {
    id?: true
  }

  export type CostCenterMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CostCenterMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CostCenterCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CostCenterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CostCenter to aggregate.
     */
    where?: CostCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CostCenters to fetch.
     */
    orderBy?: CostCenterOrderByWithRelationInput | CostCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CostCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CostCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CostCenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CostCenters
    **/
    _count?: true | CostCenterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CostCenterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CostCenterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CostCenterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CostCenterMaxAggregateInputType
  }

  export type GetCostCenterAggregateType<T extends CostCenterAggregateArgs> = {
        [P in keyof T & keyof AggregateCostCenter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCostCenter[P]>
      : GetScalarType<T[P], AggregateCostCenter[P]>
  }




  export type CostCenterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CostCenterWhereInput
    orderBy?: CostCenterOrderByWithAggregationInput | CostCenterOrderByWithAggregationInput[]
    by: CostCenterScalarFieldEnum[] | CostCenterScalarFieldEnum
    having?: CostCenterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CostCenterCountAggregateInputType | true
    _avg?: CostCenterAvgAggregateInputType
    _sum?: CostCenterSumAggregateInputType
    _min?: CostCenterMinAggregateInputType
    _max?: CostCenterMaxAggregateInputType
  }

  export type CostCenterGroupByOutputType = {
    id: number
    code: string
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CostCenterCountAggregateOutputType | null
    _avg: CostCenterAvgAggregateOutputType | null
    _sum: CostCenterSumAggregateOutputType | null
    _min: CostCenterMinAggregateOutputType | null
    _max: CostCenterMaxAggregateOutputType | null
  }

  type GetCostCenterGroupByPayload<T extends CostCenterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CostCenterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CostCenterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CostCenterGroupByOutputType[P]>
            : GetScalarType<T[P], CostCenterGroupByOutputType[P]>
        }
      >
    >


  export type CostCenterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lines?: boolean | CostCenter$linesArgs<ExtArgs>
    _count?: boolean | CostCenterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["costCenter"]>

  export type CostCenterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["costCenter"]>

  export type CostCenterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["costCenter"]>

  export type CostCenterSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CostCenterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["costCenter"]>
  export type CostCenterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | CostCenter$linesArgs<ExtArgs>
    _count?: boolean | CostCenterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CostCenterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CostCenterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CostCenterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CostCenter"
    objects: {
      lines: Prisma.$JournalEntryLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["costCenter"]>
    composites: {}
  }

  type CostCenterGetPayload<S extends boolean | null | undefined | CostCenterDefaultArgs> = $Result.GetResult<Prisma.$CostCenterPayload, S>

  type CostCenterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CostCenterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CostCenterCountAggregateInputType | true
    }

  export interface CostCenterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CostCenter'], meta: { name: 'CostCenter' } }
    /**
     * Find zero or one CostCenter that matches the filter.
     * @param {CostCenterFindUniqueArgs} args - Arguments to find a CostCenter
     * @example
     * // Get one CostCenter
     * const costCenter = await prisma.costCenter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CostCenterFindUniqueArgs>(args: SelectSubset<T, CostCenterFindUniqueArgs<ExtArgs>>): Prisma__CostCenterClient<$Result.GetResult<Prisma.$CostCenterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CostCenter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CostCenterFindUniqueOrThrowArgs} args - Arguments to find a CostCenter
     * @example
     * // Get one CostCenter
     * const costCenter = await prisma.costCenter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CostCenterFindUniqueOrThrowArgs>(args: SelectSubset<T, CostCenterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CostCenterClient<$Result.GetResult<Prisma.$CostCenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CostCenter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostCenterFindFirstArgs} args - Arguments to find a CostCenter
     * @example
     * // Get one CostCenter
     * const costCenter = await prisma.costCenter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CostCenterFindFirstArgs>(args?: SelectSubset<T, CostCenterFindFirstArgs<ExtArgs>>): Prisma__CostCenterClient<$Result.GetResult<Prisma.$CostCenterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CostCenter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostCenterFindFirstOrThrowArgs} args - Arguments to find a CostCenter
     * @example
     * // Get one CostCenter
     * const costCenter = await prisma.costCenter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CostCenterFindFirstOrThrowArgs>(args?: SelectSubset<T, CostCenterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CostCenterClient<$Result.GetResult<Prisma.$CostCenterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CostCenters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostCenterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CostCenters
     * const costCenters = await prisma.costCenter.findMany()
     *
     * // Get first 10 CostCenters
     * const costCenters = await prisma.costCenter.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const costCenterWithIdOnly = await prisma.costCenter.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CostCenterFindManyArgs>(args?: SelectSubset<T, CostCenterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CostCenterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CostCenter.
     * @param {CostCenterCreateArgs} args - Arguments to create a CostCenter.
     * @example
     * // Create one CostCenter
     * const CostCenter = await prisma.costCenter.create({
     *   data: {
     *     // ... data to create a CostCenter
     *   }
     * })
     *
     */
    create<T extends CostCenterCreateArgs>(args: SelectSubset<T, CostCenterCreateArgs<ExtArgs>>): Prisma__CostCenterClient<$Result.GetResult<Prisma.$CostCenterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CostCenters.
     * @param {CostCenterCreateManyArgs} args - Arguments to create many CostCenters.
     * @example
     * // Create many CostCenters
     * const costCenter = await prisma.costCenter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CostCenterCreateManyArgs>(args?: SelectSubset<T, CostCenterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CostCenters and returns the data saved in the database.
     * @param {CostCenterCreateManyAndReturnArgs} args - Arguments to create many CostCenters.
     * @example
     * // Create many CostCenters
     * const costCenter = await prisma.costCenter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CostCenters and only return the `id`
     * const costCenterWithIdOnly = await prisma.costCenter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CostCenterCreateManyAndReturnArgs>(args?: SelectSubset<T, CostCenterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CostCenterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CostCenter.
     * @param {CostCenterDeleteArgs} args - Arguments to delete one CostCenter.
     * @example
     * // Delete one CostCenter
     * const CostCenter = await prisma.costCenter.delete({
     *   where: {
     *     // ... filter to delete one CostCenter
     *   }
     * })
     *
     */
    delete<T extends CostCenterDeleteArgs>(args: SelectSubset<T, CostCenterDeleteArgs<ExtArgs>>): Prisma__CostCenterClient<$Result.GetResult<Prisma.$CostCenterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CostCenter.
     * @param {CostCenterUpdateArgs} args - Arguments to update one CostCenter.
     * @example
     * // Update one CostCenter
     * const costCenter = await prisma.costCenter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CostCenterUpdateArgs>(args: SelectSubset<T, CostCenterUpdateArgs<ExtArgs>>): Prisma__CostCenterClient<$Result.GetResult<Prisma.$CostCenterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CostCenters.
     * @param {CostCenterDeleteManyArgs} args - Arguments to filter CostCenters to delete.
     * @example
     * // Delete a few CostCenters
     * const { count } = await prisma.costCenter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CostCenterDeleteManyArgs>(args?: SelectSubset<T, CostCenterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CostCenters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostCenterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CostCenters
     * const costCenter = await prisma.costCenter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CostCenterUpdateManyArgs>(args: SelectSubset<T, CostCenterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CostCenters and returns the data updated in the database.
     * @param {CostCenterUpdateManyAndReturnArgs} args - Arguments to update many CostCenters.
     * @example
     * // Update many CostCenters
     * const costCenter = await prisma.costCenter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CostCenters and only return the `id`
     * const costCenterWithIdOnly = await prisma.costCenter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CostCenterUpdateManyAndReturnArgs>(args: SelectSubset<T, CostCenterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CostCenterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CostCenter.
     * @param {CostCenterUpsertArgs} args - Arguments to update or create a CostCenter.
     * @example
     * // Update or create a CostCenter
     * const costCenter = await prisma.costCenter.upsert({
     *   create: {
     *     // ... data to create a CostCenter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CostCenter we want to update
     *   }
     * })
     */
    upsert<T extends CostCenterUpsertArgs>(args: SelectSubset<T, CostCenterUpsertArgs<ExtArgs>>): Prisma__CostCenterClient<$Result.GetResult<Prisma.$CostCenterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CostCenters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostCenterCountArgs} args - Arguments to filter CostCenters to count.
     * @example
     * // Count the number of CostCenters
     * const count = await prisma.costCenter.count({
     *   where: {
     *     // ... the filter for the CostCenters we want to count
     *   }
     * })
    **/
    count<T extends CostCenterCountArgs>(
      args?: Subset<T, CostCenterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CostCenterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CostCenter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostCenterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CostCenterAggregateArgs>(args: Subset<T, CostCenterAggregateArgs>): Prisma.PrismaPromise<GetCostCenterAggregateType<T>>

    /**
     * Group by CostCenter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostCenterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<
      T extends CostCenterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CostCenterGroupByArgs['orderBy'] }
        : { orderBy?: CostCenterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CostCenterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCostCenterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CostCenter model
   */
  readonly fields: CostCenterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CostCenter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CostCenterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lines<T extends CostCenter$linesArgs<ExtArgs> = {}>(args?: Subset<T, CostCenter$linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CostCenter model
   */
  interface CostCenterFieldRefs {
    readonly id: FieldRef<"CostCenter", 'Int'>
    readonly code: FieldRef<"CostCenter", 'String'>
    readonly name: FieldRef<"CostCenter", 'String'>
    readonly isActive: FieldRef<"CostCenter", 'Boolean'>
    readonly createdAt: FieldRef<"CostCenter", 'DateTime'>
    readonly updatedAt: FieldRef<"CostCenter", 'DateTime'>
  }


  // Custom InputTypes
  /**
   * CostCenter findUnique
   */
  export type CostCenterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostCenter
     */
    select?: CostCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostCenter
     */
    omit?: CostCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostCenterInclude<ExtArgs> | null
    /**
     * Filter, which CostCenter to fetch.
     */
    where: CostCenterWhereUniqueInput
  }

  /**
   * CostCenter findUniqueOrThrow
   */
  export type CostCenterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostCenter
     */
    select?: CostCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostCenter
     */
    omit?: CostCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostCenterInclude<ExtArgs> | null
    /**
     * Filter, which CostCenter to fetch.
     */
    where: CostCenterWhereUniqueInput
  }

  /**
   * CostCenter findFirst
   */
  export type CostCenterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostCenter
     */
    select?: CostCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostCenter
     */
    omit?: CostCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostCenterInclude<ExtArgs> | null
    /**
     * Filter, which CostCenter to fetch.
     */
    where?: CostCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CostCenters to fetch.
     */
    orderBy?: CostCenterOrderByWithRelationInput | CostCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CostCenters.
     */
    cursor?: CostCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CostCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CostCenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CostCenters.
     */
    distinct?: CostCenterScalarFieldEnum | CostCenterScalarFieldEnum[]
  }

  /**
   * CostCenter findFirstOrThrow
   */
  export type CostCenterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostCenter
     */
    select?: CostCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostCenter
     */
    omit?: CostCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostCenterInclude<ExtArgs> | null
    /**
     * Filter, which CostCenter to fetch.
     */
    where?: CostCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CostCenters to fetch.
     */
    orderBy?: CostCenterOrderByWithRelationInput | CostCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CostCenters.
     */
    cursor?: CostCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CostCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CostCenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CostCenters.
     */
    distinct?: CostCenterScalarFieldEnum | CostCenterScalarFieldEnum[]
  }

  /**
   * CostCenter findMany
   */
  export type CostCenterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostCenter
     */
    select?: CostCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostCenter
     */
    omit?: CostCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostCenterInclude<ExtArgs> | null
    /**
     * Filter, which CostCenters to fetch.
     */
    where?: CostCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CostCenters to fetch.
     */
    orderBy?: CostCenterOrderByWithRelationInput | CostCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CostCenters.
     */
    cursor?: CostCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CostCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CostCenters.
     */
    skip?: number
    distinct?: CostCenterScalarFieldEnum | CostCenterScalarFieldEnum[]
  }

  /**
   * CostCenter create
   */
  export type CostCenterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostCenter
     */
    select?: CostCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostCenter
     */
    omit?: CostCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostCenterInclude<ExtArgs> | null
    /**
     * The data needed to create a CostCenter.
     */
    data: XOR<CostCenterCreateInput, CostCenterUncheckedCreateInput>
  }

  /**
   * CostCenter createMany
   */
  export type CostCenterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CostCenters.
     */
    data: CostCenterCreateManyInput | CostCenterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CostCenter createManyAndReturn
   */
  export type CostCenterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostCenter
     */
    select?: CostCenterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CostCenter
     */
    omit?: CostCenterOmit<ExtArgs> | null
    /**
     * The data used to create many CostCenters.
     */
    data: CostCenterCreateManyInput | CostCenterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CostCenter update
   */
  export type CostCenterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostCenter
     */
    select?: CostCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostCenter
     */
    omit?: CostCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostCenterInclude<ExtArgs> | null
    /**
     * The data needed to update a CostCenter.
     */
    data: XOR<CostCenterUpdateInput, CostCenterUncheckedUpdateInput>
    /**
     * Choose, which CostCenter to update.
     */
    where: CostCenterWhereUniqueInput
  }

  /**
   * CostCenter updateMany
   */
  export type CostCenterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CostCenters.
     */
    data: XOR<CostCenterUpdateManyMutationInput, CostCenterUncheckedUpdateManyInput>
    /**
     * Filter which CostCenters to update
     */
    where?: CostCenterWhereInput
    /**
     * Limit how many CostCenters to update.
     */
    limit?: number
  }

  /**
   * CostCenter updateManyAndReturn
   */
  export type CostCenterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostCenter
     */
    select?: CostCenterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CostCenter
     */
    omit?: CostCenterOmit<ExtArgs> | null
    /**
     * The data used to update CostCenters.
     */
    data: XOR<CostCenterUpdateManyMutationInput, CostCenterUncheckedUpdateManyInput>
    /**
     * Filter which CostCenters to update
     */
    where?: CostCenterWhereInput
    /**
     * Limit how many CostCenters to update.
     */
    limit?: number
  }

  /**
   * CostCenter upsert
   */
  export type CostCenterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostCenter
     */
    select?: CostCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostCenter
     */
    omit?: CostCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostCenterInclude<ExtArgs> | null
    /**
     * The filter to search for the CostCenter to update in case it exists.
     */
    where: CostCenterWhereUniqueInput
    /**
     * In case the CostCenter found by the `where` argument doesn't exist, create a new CostCenter with this data.
     */
    create: XOR<CostCenterCreateInput, CostCenterUncheckedCreateInput>
    /**
     * In case the CostCenter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CostCenterUpdateInput, CostCenterUncheckedUpdateInput>
  }

  /**
   * CostCenter delete
   */
  export type CostCenterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostCenter
     */
    select?: CostCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostCenter
     */
    omit?: CostCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostCenterInclude<ExtArgs> | null
    /**
     * Filter which CostCenter to delete.
     */
    where: CostCenterWhereUniqueInput
  }

  /**
   * CostCenter deleteMany
   */
  export type CostCenterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CostCenters to delete
     */
    where?: CostCenterWhereInput
    /**
     * Limit how many CostCenters to delete.
     */
    limit?: number
  }

  /**
   * CostCenter.lines
   */
  export type CostCenter$linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryLine
     */
    select?: JournalEntryLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntryLine
     */
    omit?: JournalEntryLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryLineInclude<ExtArgs> | null
    where?: JournalEntryLineWhereInput
    orderBy?: JournalEntryLineOrderByWithRelationInput | JournalEntryLineOrderByWithRelationInput[]
    cursor?: JournalEntryLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JournalEntryLineScalarFieldEnum | JournalEntryLineScalarFieldEnum[]
  }

  /**
   * CostCenter without action
   */
  export type CostCenterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CostCenter
     */
    select?: CostCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CostCenter
     */
    omit?: CostCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CostCenterInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }


  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const AccountingPeriodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    isClosed: 'isClosed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountingPeriodScalarFieldEnum = (typeof AccountingPeriodScalarFieldEnum)[keyof typeof AccountingPeriodScalarFieldEnum]


  export const JournalEntryScalarFieldEnum: {
    id: 'id',
    date: 'date',
    description: 'description',
    status: 'status',
    rejectionReason: 'rejectionReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JournalEntryScalarFieldEnum = (typeof JournalEntryScalarFieldEnum)[keyof typeof JournalEntryScalarFieldEnum]


  export const JournalEntryLineScalarFieldEnum: {
    id: 'id',
    journalEntryId: 'journalEntryId',
    accountId: 'accountId',
    costCenterId: 'costCenterId',
    amount: 'amount',
    isDebit: 'isDebit'
  };

  export type JournalEntryLineScalarFieldEnum = (typeof JournalEntryLineScalarFieldEnum)[keyof typeof JournalEntryLineScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    entityId: 'entityId',
    entityType: 'entityType',
    userId: 'userId',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    email: 'email',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    invoiceNo: 'invoiceNo',
    type: 'type',
    contactId: 'contactId',
    date: 'date',
    dueDate: 'dueDate',
    status: 'status',
    totalAmount: 'totalAmount',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const CostCenterScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CostCenterScalarFieldEnum = (typeof CostCenterScalarFieldEnum)[keyof typeof CostCenterScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>



  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>



  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>



  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>



  /**
   * Reference to a field of type 'AccountType'
   */
  export type EnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType'>



  /**
   * Reference to a field of type 'AccountType[]'
   */
  export type ListEnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType[]'>



  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>



  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>



  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>



  /**
   * Reference to a field of type 'JournalEntryStatus'
   */
  export type EnumJournalEntryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JournalEntryStatus'>



  /**
   * Reference to a field of type 'JournalEntryStatus[]'
   */
  export type ListEnumJournalEntryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JournalEntryStatus[]'>



  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>



  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>



  /**
   * Reference to a field of type 'ContactType'
   */
  export type EnumContactTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactType'>



  /**
   * Reference to a field of type 'ContactType[]'
   */
  export type ListEnumContactTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactType[]'>



  /**
   * Reference to a field of type 'InvoiceType'
   */
  export type EnumInvoiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceType'>



  /**
   * Reference to a field of type 'InvoiceType[]'
   */
  export type ListEnumInvoiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceType[]'>



  /**
   * Reference to a field of type 'InvoiceStatus'
   */
  export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>



  /**
   * Reference to a field of type 'InvoiceStatus[]'
   */
  export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>



  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>



  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>

  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: IntFilter<"Account"> | number
    code?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    type?: EnumAccountTypeFilter<"Account"> | $Enums.AccountType
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    lines?: JournalEntryLineListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lines?: JournalEntryLineOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    name?: StringFilter<"Account"> | string
    type?: EnumAccountTypeFilter<"Account"> | $Enums.AccountType
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    lines?: JournalEntryLineListRelationFilter
  }, "id" | "code">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Account"> | number
    code?: StringWithAggregatesFilter<"Account"> | string
    name?: StringWithAggregatesFilter<"Account"> | string
    type?: EnumAccountTypeWithAggregatesFilter<"Account"> | $Enums.AccountType
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type AccountingPeriodWhereInput = {
    AND?: AccountingPeriodWhereInput | AccountingPeriodWhereInput[]
    OR?: AccountingPeriodWhereInput[]
    NOT?: AccountingPeriodWhereInput | AccountingPeriodWhereInput[]
    id?: IntFilter<"AccountingPeriod"> | number
    name?: StringFilter<"AccountingPeriod"> | string
    startDate?: DateTimeFilter<"AccountingPeriod"> | Date | string
    endDate?: DateTimeFilter<"AccountingPeriod"> | Date | string
    isClosed?: BoolFilter<"AccountingPeriod"> | boolean
    createdAt?: DateTimeFilter<"AccountingPeriod"> | Date | string
    updatedAt?: DateTimeFilter<"AccountingPeriod"> | Date | string
  }

  export type AccountingPeriodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isClosed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountingPeriodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AccountingPeriodWhereInput | AccountingPeriodWhereInput[]
    OR?: AccountingPeriodWhereInput[]
    NOT?: AccountingPeriodWhereInput | AccountingPeriodWhereInput[]
    name?: StringFilter<"AccountingPeriod"> | string
    startDate?: DateTimeFilter<"AccountingPeriod"> | Date | string
    endDate?: DateTimeFilter<"AccountingPeriod"> | Date | string
    isClosed?: BoolFilter<"AccountingPeriod"> | boolean
    createdAt?: DateTimeFilter<"AccountingPeriod"> | Date | string
    updatedAt?: DateTimeFilter<"AccountingPeriod"> | Date | string
  }, "id">

  export type AccountingPeriodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isClosed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountingPeriodCountOrderByAggregateInput
    _avg?: AccountingPeriodAvgOrderByAggregateInput
    _max?: AccountingPeriodMaxOrderByAggregateInput
    _min?: AccountingPeriodMinOrderByAggregateInput
    _sum?: AccountingPeriodSumOrderByAggregateInput
  }

  export type AccountingPeriodScalarWhereWithAggregatesInput = {
    AND?: AccountingPeriodScalarWhereWithAggregatesInput | AccountingPeriodScalarWhereWithAggregatesInput[]
    OR?: AccountingPeriodScalarWhereWithAggregatesInput[]
    NOT?: AccountingPeriodScalarWhereWithAggregatesInput | AccountingPeriodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AccountingPeriod"> | number
    name?: StringWithAggregatesFilter<"AccountingPeriod"> | string
    startDate?: DateTimeWithAggregatesFilter<"AccountingPeriod"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"AccountingPeriod"> | Date | string
    isClosed?: BoolWithAggregatesFilter<"AccountingPeriod"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AccountingPeriod"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccountingPeriod"> | Date | string
  }

  export type JournalEntryWhereInput = {
    AND?: JournalEntryWhereInput | JournalEntryWhereInput[]
    OR?: JournalEntryWhereInput[]
    NOT?: JournalEntryWhereInput | JournalEntryWhereInput[]
    id?: IntFilter<"JournalEntry"> | number
    date?: DateTimeFilter<"JournalEntry"> | Date | string
    description?: StringFilter<"JournalEntry"> | string
    status?: EnumJournalEntryStatusFilter<"JournalEntry"> | $Enums.JournalEntryStatus
    rejectionReason?: StringNullableFilter<"JournalEntry"> | string | null
    createdAt?: DateTimeFilter<"JournalEntry"> | Date | string
    updatedAt?: DateTimeFilter<"JournalEntry"> | Date | string
    lines?: JournalEntryLineListRelationFilter
  }

  export type JournalEntryOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lines?: JournalEntryLineOrderByRelationAggregateInput
  }

  export type JournalEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JournalEntryWhereInput | JournalEntryWhereInput[]
    OR?: JournalEntryWhereInput[]
    NOT?: JournalEntryWhereInput | JournalEntryWhereInput[]
    date?: DateTimeFilter<"JournalEntry"> | Date | string
    description?: StringFilter<"JournalEntry"> | string
    status?: EnumJournalEntryStatusFilter<"JournalEntry"> | $Enums.JournalEntryStatus
    rejectionReason?: StringNullableFilter<"JournalEntry"> | string | null
    createdAt?: DateTimeFilter<"JournalEntry"> | Date | string
    updatedAt?: DateTimeFilter<"JournalEntry"> | Date | string
    lines?: JournalEntryLineListRelationFilter
  }, "id">

  export type JournalEntryOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JournalEntryCountOrderByAggregateInput
    _avg?: JournalEntryAvgOrderByAggregateInput
    _max?: JournalEntryMaxOrderByAggregateInput
    _min?: JournalEntryMinOrderByAggregateInput
    _sum?: JournalEntrySumOrderByAggregateInput
  }

  export type JournalEntryScalarWhereWithAggregatesInput = {
    AND?: JournalEntryScalarWhereWithAggregatesInput | JournalEntryScalarWhereWithAggregatesInput[]
    OR?: JournalEntryScalarWhereWithAggregatesInput[]
    NOT?: JournalEntryScalarWhereWithAggregatesInput | JournalEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JournalEntry"> | number
    date?: DateTimeWithAggregatesFilter<"JournalEntry"> | Date | string
    description?: StringWithAggregatesFilter<"JournalEntry"> | string
    status?: EnumJournalEntryStatusWithAggregatesFilter<"JournalEntry"> | $Enums.JournalEntryStatus
    rejectionReason?: StringNullableWithAggregatesFilter<"JournalEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JournalEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JournalEntry"> | Date | string
  }

  export type JournalEntryLineWhereInput = {
    AND?: JournalEntryLineWhereInput | JournalEntryLineWhereInput[]
    OR?: JournalEntryLineWhereInput[]
    NOT?: JournalEntryLineWhereInput | JournalEntryLineWhereInput[]
    id?: IntFilter<"JournalEntryLine"> | number
    journalEntryId?: IntFilter<"JournalEntryLine"> | number
    accountId?: IntFilter<"JournalEntryLine"> | number
    costCenterId?: IntNullableFilter<"JournalEntryLine"> | number | null
    amount?: FloatFilter<"JournalEntryLine"> | number
    isDebit?: BoolFilter<"JournalEntryLine"> | boolean
    journalEntry?: XOR<JournalEntryScalarRelationFilter, JournalEntryWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    costCenter?: XOR<CostCenterNullableScalarRelationFilter, CostCenterWhereInput> | null
  }

  export type JournalEntryLineOrderByWithRelationInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    accountId?: SortOrder
    costCenterId?: SortOrderInput | SortOrder
    amount?: SortOrder
    isDebit?: SortOrder
    journalEntry?: JournalEntryOrderByWithRelationInput
    account?: AccountOrderByWithRelationInput
    costCenter?: CostCenterOrderByWithRelationInput
  }

  export type JournalEntryLineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JournalEntryLineWhereInput | JournalEntryLineWhereInput[]
    OR?: JournalEntryLineWhereInput[]
    NOT?: JournalEntryLineWhereInput | JournalEntryLineWhereInput[]
    journalEntryId?: IntFilter<"JournalEntryLine"> | number
    accountId?: IntFilter<"JournalEntryLine"> | number
    costCenterId?: IntNullableFilter<"JournalEntryLine"> | number | null
    amount?: FloatFilter<"JournalEntryLine"> | number
    isDebit?: BoolFilter<"JournalEntryLine"> | boolean
    journalEntry?: XOR<JournalEntryScalarRelationFilter, JournalEntryWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    costCenter?: XOR<CostCenterNullableScalarRelationFilter, CostCenterWhereInput> | null
  }, "id">

  export type JournalEntryLineOrderByWithAggregationInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    accountId?: SortOrder
    costCenterId?: SortOrderInput | SortOrder
    amount?: SortOrder
    isDebit?: SortOrder
    _count?: JournalEntryLineCountOrderByAggregateInput
    _avg?: JournalEntryLineAvgOrderByAggregateInput
    _max?: JournalEntryLineMaxOrderByAggregateInput
    _min?: JournalEntryLineMinOrderByAggregateInput
    _sum?: JournalEntryLineSumOrderByAggregateInput
  }

  export type JournalEntryLineScalarWhereWithAggregatesInput = {
    AND?: JournalEntryLineScalarWhereWithAggregatesInput | JournalEntryLineScalarWhereWithAggregatesInput[]
    OR?: JournalEntryLineScalarWhereWithAggregatesInput[]
    NOT?: JournalEntryLineScalarWhereWithAggregatesInput | JournalEntryLineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JournalEntryLine"> | number
    journalEntryId?: IntWithAggregatesFilter<"JournalEntryLine"> | number
    accountId?: IntWithAggregatesFilter<"JournalEntryLine"> | number
    costCenterId?: IntNullableWithAggregatesFilter<"JournalEntryLine"> | number | null
    amount?: FloatWithAggregatesFilter<"JournalEntryLine"> | number
    isDebit?: BoolWithAggregatesFilter<"JournalEntryLine"> | boolean
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    action?: StringFilter<"AuditLog"> | string
    entityId?: IntFilter<"AuditLog"> | number
    entityType?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    details?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    entityType?: SortOrder
    userId?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    action?: StringFilter<"AuditLog"> | string
    entityId?: IntFilter<"AuditLog"> | number
    entityType?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    details?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    entityType?: SortOrder
    userId?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _avg?: AuditLogAvgOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
    _sum?: AuditLogSumOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuditLog"> | number
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: IntWithAggregatesFilter<"AuditLog"> | number
    entityType?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    details?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: IntFilter<"Contact"> | number
    name?: StringFilter<"Contact"> | string
    type?: EnumContactTypeFilter<"Contact"> | $Enums.ContactType
    email?: StringNullableFilter<"Contact"> | string | null
    phone?: StringNullableFilter<"Contact"> | string | null
    address?: StringNullableFilter<"Contact"> | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    invoices?: InvoiceListRelationFilter
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invoices?: InvoiceOrderByRelationAggregateInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    name?: StringFilter<"Contact"> | string
    type?: EnumContactTypeFilter<"Contact"> | $Enums.ContactType
    email?: StringNullableFilter<"Contact"> | string | null
    phone?: StringNullableFilter<"Contact"> | string | null
    address?: StringNullableFilter<"Contact"> | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    invoices?: InvoiceListRelationFilter
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contact"> | number
    name?: StringWithAggregatesFilter<"Contact"> | string
    type?: EnumContactTypeWithAggregatesFilter<"Contact"> | $Enums.ContactType
    email?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    address?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: IntFilter<"Invoice"> | number
    invoiceNo?: StringFilter<"Invoice"> | string
    type?: EnumInvoiceTypeFilter<"Invoice"> | $Enums.InvoiceType
    contactId?: IntFilter<"Invoice"> | number
    date?: DateTimeFilter<"Invoice"> | Date | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    totalAmount?: FloatFilter<"Invoice"> | number
    notes?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    invoiceNo?: SortOrder
    type?: SortOrder
    contactId?: SortOrder
    date?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contact?: ContactOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    invoiceNo?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    type?: EnumInvoiceTypeFilter<"Invoice"> | $Enums.InvoiceType
    contactId?: IntFilter<"Invoice"> | number
    date?: DateTimeFilter<"Invoice"> | Date | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    totalAmount?: FloatFilter<"Invoice"> | number
    notes?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>
  }, "id" | "invoiceNo">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceNo?: SortOrder
    type?: SortOrder
    contactId?: SortOrder
    date?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Invoice"> | number
    invoiceNo?: StringWithAggregatesFilter<"Invoice"> | string
    type?: EnumInvoiceTypeWithAggregatesFilter<"Invoice"> | $Enums.InvoiceType
    contactId?: IntWithAggregatesFilter<"Invoice"> | number
    date?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    dueDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    status?: EnumInvoiceStatusWithAggregatesFilter<"Invoice"> | $Enums.InvoiceStatus
    totalAmount?: FloatWithAggregatesFilter<"Invoice"> | number
    notes?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type CostCenterWhereInput = {
    AND?: CostCenterWhereInput | CostCenterWhereInput[]
    OR?: CostCenterWhereInput[]
    NOT?: CostCenterWhereInput | CostCenterWhereInput[]
    id?: IntFilter<"CostCenter"> | number
    code?: StringFilter<"CostCenter"> | string
    name?: StringFilter<"CostCenter"> | string
    isActive?: BoolFilter<"CostCenter"> | boolean
    createdAt?: DateTimeFilter<"CostCenter"> | Date | string
    updatedAt?: DateTimeFilter<"CostCenter"> | Date | string
    lines?: JournalEntryLineListRelationFilter
  }

  export type CostCenterOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lines?: JournalEntryLineOrderByRelationAggregateInput
  }

  export type CostCenterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: CostCenterWhereInput | CostCenterWhereInput[]
    OR?: CostCenterWhereInput[]
    NOT?: CostCenterWhereInput | CostCenterWhereInput[]
    name?: StringFilter<"CostCenter"> | string
    isActive?: BoolFilter<"CostCenter"> | boolean
    createdAt?: DateTimeFilter<"CostCenter"> | Date | string
    updatedAt?: DateTimeFilter<"CostCenter"> | Date | string
    lines?: JournalEntryLineListRelationFilter
  }, "id" | "code">

  export type CostCenterOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CostCenterCountOrderByAggregateInput
    _avg?: CostCenterAvgOrderByAggregateInput
    _max?: CostCenterMaxOrderByAggregateInput
    _min?: CostCenterMinOrderByAggregateInput
    _sum?: CostCenterSumOrderByAggregateInput
  }

  export type CostCenterScalarWhereWithAggregatesInput = {
    AND?: CostCenterScalarWhereWithAggregatesInput | CostCenterScalarWhereWithAggregatesInput[]
    OR?: CostCenterScalarWhereWithAggregatesInput[]
    NOT?: CostCenterScalarWhereWithAggregatesInput | CostCenterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CostCenter"> | number
    code?: StringWithAggregatesFilter<"CostCenter"> | string
    name?: StringWithAggregatesFilter<"CostCenter"> | string
    isActive?: BoolWithAggregatesFilter<"CostCenter"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CostCenter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CostCenter"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountCreateInput = {
    code: string
    name: string
    type: $Enums.AccountType
    createdAt?: Date | string
    updatedAt?: Date | string
    lines?: JournalEntryLineCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    type: $Enums.AccountType
    createdAt?: Date | string
    updatedAt?: Date | string
    lines?: JournalEntryLineUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: JournalEntryLineUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: JournalEntryLineUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: number
    code: string
    name: string
    type: $Enums.AccountType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountingPeriodCreateInput = {
    name: string
    startDate: Date | string
    endDate: Date | string
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountingPeriodUncheckedCreateInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate: Date | string
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountingPeriodUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountingPeriodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountingPeriodCreateManyInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate: Date | string
    isClosed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountingPeriodUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountingPeriodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryCreateInput = {
    date: Date | string
    description: string
    status?: $Enums.JournalEntryStatus
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lines?: JournalEntryLineCreateNestedManyWithoutJournalEntryInput
  }

  export type JournalEntryUncheckedCreateInput = {
    id?: number
    date: Date | string
    description: string
    status?: $Enums.JournalEntryStatus
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lines?: JournalEntryLineUncheckedCreateNestedManyWithoutJournalEntryInput
  }

  export type JournalEntryUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJournalEntryStatusFieldUpdateOperationsInput | $Enums.JournalEntryStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: JournalEntryLineUpdateManyWithoutJournalEntryNestedInput
  }

  export type JournalEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJournalEntryStatusFieldUpdateOperationsInput | $Enums.JournalEntryStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: JournalEntryLineUncheckedUpdateManyWithoutJournalEntryNestedInput
  }

  export type JournalEntryCreateManyInput = {
    id?: number
    date: Date | string
    description: string
    status?: $Enums.JournalEntryStatus
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalEntryUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJournalEntryStatusFieldUpdateOperationsInput | $Enums.JournalEntryStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJournalEntryStatusFieldUpdateOperationsInput | $Enums.JournalEntryStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryLineCreateInput = {
    amount: number
    isDebit: boolean
    journalEntry: JournalEntryCreateNestedOneWithoutLinesInput
    account: AccountCreateNestedOneWithoutLinesInput
    costCenter?: CostCenterCreateNestedOneWithoutLinesInput
  }

  export type JournalEntryLineUncheckedCreateInput = {
    id?: number
    journalEntryId: number
    accountId: number
    costCenterId?: number | null
    amount: number
    isDebit: boolean
  }

  export type JournalEntryLineUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    isDebit?: BoolFieldUpdateOperationsInput | boolean
    journalEntry?: JournalEntryUpdateOneRequiredWithoutLinesNestedInput
    account?: AccountUpdateOneRequiredWithoutLinesNestedInput
    costCenter?: CostCenterUpdateOneWithoutLinesNestedInput
  }

  export type JournalEntryLineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    journalEntryId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    costCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    isDebit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JournalEntryLineCreateManyInput = {
    id?: number
    journalEntryId: number
    accountId: number
    costCenterId?: number | null
    amount: number
    isDebit: boolean
  }

  export type JournalEntryLineUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    isDebit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JournalEntryLineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    journalEntryId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    costCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    isDebit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AuditLogCreateInput = {
    action: string
    entityId: number
    entityType: string
    userId?: string | null
    details?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: number
    action: string
    entityId: number
    entityType: string
    userId?: string | null
    details?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: number
    action: string
    entityId: number
    entityType: string
    userId?: string | null
    details?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    entityType?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateInput = {
    name: string
    type: $Enums.ContactType
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateInput = {
    id?: number
    name: string
    type: $Enums.ContactType
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutContactNestedInput
  }

  export type ContactCreateManyInput = {
    id?: number
    name: string
    type: $Enums.ContactType
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    invoiceNo: string
    type: $Enums.InvoiceType
    date: Date | string
    dueDate: Date | string
    status?: $Enums.InvoiceStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contact: ContactCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: number
    invoiceNo: string
    type: $Enums.InvoiceType
    contactId: number
    date: Date | string
    dueDate: Date | string
    status?: $Enums.InvoiceStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateInput = {
    invoiceNo?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceNo?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
    contactId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyInput = {
    id?: number
    invoiceNo: string
    type: $Enums.InvoiceType
    contactId: number
    date: Date | string
    dueDate: Date | string
    status?: $Enums.InvoiceStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    invoiceNo?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceNo?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
    contactId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CostCenterCreateInput = {
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lines?: JournalEntryLineCreateNestedManyWithoutCostCenterInput
  }

  export type CostCenterUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lines?: JournalEntryLineUncheckedCreateNestedManyWithoutCostCenterInput
  }

  export type CostCenterUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: JournalEntryLineUpdateManyWithoutCostCenterNestedInput
  }

  export type CostCenterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lines?: JournalEntryLineUncheckedUpdateManyWithoutCostCenterNestedInput
  }

  export type CostCenterCreateManyInput = {
    id?: number
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CostCenterUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CostCenterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type JournalEntryLineListRelationFilter = {
    every?: JournalEntryLineWhereInput
    some?: JournalEntryLineWhereInput
    none?: JournalEntryLineWhereInput
  }

  export type JournalEntryLineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AccountingPeriodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isClosed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountingPeriodAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccountingPeriodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isClosed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountingPeriodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isClosed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountingPeriodSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumJournalEntryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JournalEntryStatus | EnumJournalEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JournalEntryStatus[] | ListEnumJournalEntryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JournalEntryStatus[] | ListEnumJournalEntryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJournalEntryStatusFilter<$PrismaModel> | $Enums.JournalEntryStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JournalEntryCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalEntryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JournalEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalEntryMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalEntrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumJournalEntryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JournalEntryStatus | EnumJournalEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JournalEntryStatus[] | ListEnumJournalEntryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JournalEntryStatus[] | ListEnumJournalEntryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJournalEntryStatusWithAggregatesFilter<$PrismaModel> | $Enums.JournalEntryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJournalEntryStatusFilter<$PrismaModel>
    _max?: NestedEnumJournalEntryStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type JournalEntryScalarRelationFilter = {
    is?: JournalEntryWhereInput
    isNot?: JournalEntryWhereInput
  }

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type CostCenterNullableScalarRelationFilter = {
    is?: CostCenterWhereInput | null
    isNot?: CostCenterWhereInput | null
  }

  export type JournalEntryLineCountOrderByAggregateInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    accountId?: SortOrder
    costCenterId?: SortOrder
    amount?: SortOrder
    isDebit?: SortOrder
  }

  export type JournalEntryLineAvgOrderByAggregateInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    accountId?: SortOrder
    costCenterId?: SortOrder
    amount?: SortOrder
  }

  export type JournalEntryLineMaxOrderByAggregateInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    accountId?: SortOrder
    costCenterId?: SortOrder
    amount?: SortOrder
    isDebit?: SortOrder
  }

  export type JournalEntryLineMinOrderByAggregateInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    accountId?: SortOrder
    costCenterId?: SortOrder
    amount?: SortOrder
    isDebit?: SortOrder
  }

  export type JournalEntryLineSumOrderByAggregateInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    accountId?: SortOrder
    costCenterId?: SortOrder
    amount?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    entityType?: SortOrder
    userId?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogAvgOrderByAggregateInput = {
    id?: SortOrder
    entityId?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    entityType?: SortOrder
    userId?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    entityType?: SortOrder
    userId?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogSumOrderByAggregateInput = {
    id?: SortOrder
    entityId?: SortOrder
  }

  export type EnumContactTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactType | EnumContactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContactTypeFilter<$PrismaModel> | $Enums.ContactType
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumContactTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactType | EnumContactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContactTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContactType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactTypeFilter<$PrismaModel>
    _max?: NestedEnumContactTypeFilter<$PrismaModel>
  }

  export type EnumInvoiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceType | EnumInvoiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceTypeFilter<$PrismaModel> | $Enums.InvoiceType
  }

  export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type ContactScalarRelationFilter = {
    is?: ContactWhereInput
    isNot?: ContactWhereInput
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceNo?: SortOrder
    type?: SortOrder
    contactId?: SortOrder
    date?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
    totalAmount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceNo?: SortOrder
    type?: SortOrder
    contactId?: SortOrder
    date?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceNo?: SortOrder
    type?: SortOrder
    contactId?: SortOrder
    date?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
    totalAmount?: SortOrder
  }

  export type EnumInvoiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceType | EnumInvoiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceTypeFilter<$PrismaModel>
    _max?: NestedEnumInvoiceTypeFilter<$PrismaModel>
  }

  export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type CostCenterCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CostCenterAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CostCenterMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CostCenterMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CostCenterSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type JournalEntryLineCreateNestedManyWithoutAccountInput = {
    create?: XOR<JournalEntryLineCreateWithoutAccountInput, JournalEntryLineUncheckedCreateWithoutAccountInput> | JournalEntryLineCreateWithoutAccountInput[] | JournalEntryLineUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: JournalEntryLineCreateOrConnectWithoutAccountInput | JournalEntryLineCreateOrConnectWithoutAccountInput[]
    createMany?: JournalEntryLineCreateManyAccountInputEnvelope
    connect?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
  }

  export type JournalEntryLineUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<JournalEntryLineCreateWithoutAccountInput, JournalEntryLineUncheckedCreateWithoutAccountInput> | JournalEntryLineCreateWithoutAccountInput[] | JournalEntryLineUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: JournalEntryLineCreateOrConnectWithoutAccountInput | JournalEntryLineCreateOrConnectWithoutAccountInput[]
    createMany?: JournalEntryLineCreateManyAccountInputEnvelope
    connect?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type JournalEntryLineUpdateManyWithoutAccountNestedInput = {
    create?: XOR<JournalEntryLineCreateWithoutAccountInput, JournalEntryLineUncheckedCreateWithoutAccountInput> | JournalEntryLineCreateWithoutAccountInput[] | JournalEntryLineUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: JournalEntryLineCreateOrConnectWithoutAccountInput | JournalEntryLineCreateOrConnectWithoutAccountInput[]
    upsert?: JournalEntryLineUpsertWithWhereUniqueWithoutAccountInput | JournalEntryLineUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: JournalEntryLineCreateManyAccountInputEnvelope
    set?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    disconnect?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    delete?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    connect?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    update?: JournalEntryLineUpdateWithWhereUniqueWithoutAccountInput | JournalEntryLineUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: JournalEntryLineUpdateManyWithWhereWithoutAccountInput | JournalEntryLineUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: JournalEntryLineScalarWhereInput | JournalEntryLineScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JournalEntryLineUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<JournalEntryLineCreateWithoutAccountInput, JournalEntryLineUncheckedCreateWithoutAccountInput> | JournalEntryLineCreateWithoutAccountInput[] | JournalEntryLineUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: JournalEntryLineCreateOrConnectWithoutAccountInput | JournalEntryLineCreateOrConnectWithoutAccountInput[]
    upsert?: JournalEntryLineUpsertWithWhereUniqueWithoutAccountInput | JournalEntryLineUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: JournalEntryLineCreateManyAccountInputEnvelope
    set?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    disconnect?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    delete?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    connect?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    update?: JournalEntryLineUpdateWithWhereUniqueWithoutAccountInput | JournalEntryLineUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: JournalEntryLineUpdateManyWithWhereWithoutAccountInput | JournalEntryLineUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: JournalEntryLineScalarWhereInput | JournalEntryLineScalarWhereInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type JournalEntryLineCreateNestedManyWithoutJournalEntryInput = {
    create?: XOR<JournalEntryLineCreateWithoutJournalEntryInput, JournalEntryLineUncheckedCreateWithoutJournalEntryInput> | JournalEntryLineCreateWithoutJournalEntryInput[] | JournalEntryLineUncheckedCreateWithoutJournalEntryInput[]
    connectOrCreate?: JournalEntryLineCreateOrConnectWithoutJournalEntryInput | JournalEntryLineCreateOrConnectWithoutJournalEntryInput[]
    createMany?: JournalEntryLineCreateManyJournalEntryInputEnvelope
    connect?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
  }

  export type JournalEntryLineUncheckedCreateNestedManyWithoutJournalEntryInput = {
    create?: XOR<JournalEntryLineCreateWithoutJournalEntryInput, JournalEntryLineUncheckedCreateWithoutJournalEntryInput> | JournalEntryLineCreateWithoutJournalEntryInput[] | JournalEntryLineUncheckedCreateWithoutJournalEntryInput[]
    connectOrCreate?: JournalEntryLineCreateOrConnectWithoutJournalEntryInput | JournalEntryLineCreateOrConnectWithoutJournalEntryInput[]
    createMany?: JournalEntryLineCreateManyJournalEntryInputEnvelope
    connect?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
  }

  export type EnumJournalEntryStatusFieldUpdateOperationsInput = {
    set?: $Enums.JournalEntryStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type JournalEntryLineUpdateManyWithoutJournalEntryNestedInput = {
    create?: XOR<JournalEntryLineCreateWithoutJournalEntryInput, JournalEntryLineUncheckedCreateWithoutJournalEntryInput> | JournalEntryLineCreateWithoutJournalEntryInput[] | JournalEntryLineUncheckedCreateWithoutJournalEntryInput[]
    connectOrCreate?: JournalEntryLineCreateOrConnectWithoutJournalEntryInput | JournalEntryLineCreateOrConnectWithoutJournalEntryInput[]
    upsert?: JournalEntryLineUpsertWithWhereUniqueWithoutJournalEntryInput | JournalEntryLineUpsertWithWhereUniqueWithoutJournalEntryInput[]
    createMany?: JournalEntryLineCreateManyJournalEntryInputEnvelope
    set?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    disconnect?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    delete?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    connect?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    update?: JournalEntryLineUpdateWithWhereUniqueWithoutJournalEntryInput | JournalEntryLineUpdateWithWhereUniqueWithoutJournalEntryInput[]
    updateMany?: JournalEntryLineUpdateManyWithWhereWithoutJournalEntryInput | JournalEntryLineUpdateManyWithWhereWithoutJournalEntryInput[]
    deleteMany?: JournalEntryLineScalarWhereInput | JournalEntryLineScalarWhereInput[]
  }

  export type JournalEntryLineUncheckedUpdateManyWithoutJournalEntryNestedInput = {
    create?: XOR<JournalEntryLineCreateWithoutJournalEntryInput, JournalEntryLineUncheckedCreateWithoutJournalEntryInput> | JournalEntryLineCreateWithoutJournalEntryInput[] | JournalEntryLineUncheckedCreateWithoutJournalEntryInput[]
    connectOrCreate?: JournalEntryLineCreateOrConnectWithoutJournalEntryInput | JournalEntryLineCreateOrConnectWithoutJournalEntryInput[]
    upsert?: JournalEntryLineUpsertWithWhereUniqueWithoutJournalEntryInput | JournalEntryLineUpsertWithWhereUniqueWithoutJournalEntryInput[]
    createMany?: JournalEntryLineCreateManyJournalEntryInputEnvelope
    set?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    disconnect?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    delete?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    connect?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    update?: JournalEntryLineUpdateWithWhereUniqueWithoutJournalEntryInput | JournalEntryLineUpdateWithWhereUniqueWithoutJournalEntryInput[]
    updateMany?: JournalEntryLineUpdateManyWithWhereWithoutJournalEntryInput | JournalEntryLineUpdateManyWithWhereWithoutJournalEntryInput[]
    deleteMany?: JournalEntryLineScalarWhereInput | JournalEntryLineScalarWhereInput[]
  }

  export type JournalEntryCreateNestedOneWithoutLinesInput = {
    create?: XOR<JournalEntryCreateWithoutLinesInput, JournalEntryUncheckedCreateWithoutLinesInput>
    connectOrCreate?: JournalEntryCreateOrConnectWithoutLinesInput
    connect?: JournalEntryWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutLinesInput = {
    create?: XOR<AccountCreateWithoutLinesInput, AccountUncheckedCreateWithoutLinesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutLinesInput
    connect?: AccountWhereUniqueInput
  }

  export type CostCenterCreateNestedOneWithoutLinesInput = {
    create?: XOR<CostCenterCreateWithoutLinesInput, CostCenterUncheckedCreateWithoutLinesInput>
    connectOrCreate?: CostCenterCreateOrConnectWithoutLinesInput
    connect?: CostCenterWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JournalEntryUpdateOneRequiredWithoutLinesNestedInput = {
    create?: XOR<JournalEntryCreateWithoutLinesInput, JournalEntryUncheckedCreateWithoutLinesInput>
    connectOrCreate?: JournalEntryCreateOrConnectWithoutLinesInput
    upsert?: JournalEntryUpsertWithoutLinesInput
    connect?: JournalEntryWhereUniqueInput
    update?: XOR<XOR<JournalEntryUpdateToOneWithWhereWithoutLinesInput, JournalEntryUpdateWithoutLinesInput>, JournalEntryUncheckedUpdateWithoutLinesInput>
  }

  export type AccountUpdateOneRequiredWithoutLinesNestedInput = {
    create?: XOR<AccountCreateWithoutLinesInput, AccountUncheckedCreateWithoutLinesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutLinesInput
    upsert?: AccountUpsertWithoutLinesInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutLinesInput, AccountUpdateWithoutLinesInput>, AccountUncheckedUpdateWithoutLinesInput>
  }

  export type CostCenterUpdateOneWithoutLinesNestedInput = {
    create?: XOR<CostCenterCreateWithoutLinesInput, CostCenterUncheckedCreateWithoutLinesInput>
    connectOrCreate?: CostCenterCreateOrConnectWithoutLinesInput
    upsert?: CostCenterUpsertWithoutLinesInput
    disconnect?: CostCenterWhereInput | boolean
    delete?: CostCenterWhereInput | boolean
    connect?: CostCenterWhereUniqueInput
    update?: XOR<XOR<CostCenterUpdateToOneWithWhereWithoutLinesInput, CostCenterUpdateWithoutLinesInput>, CostCenterUncheckedUpdateWithoutLinesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InvoiceCreateNestedManyWithoutContactInput = {
    create?: XOR<InvoiceCreateWithoutContactInput, InvoiceUncheckedCreateWithoutContactInput> | InvoiceCreateWithoutContactInput[] | InvoiceUncheckedCreateWithoutContactInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutContactInput | InvoiceCreateOrConnectWithoutContactInput[]
    createMany?: InvoiceCreateManyContactInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutContactInput = {
    create?: XOR<InvoiceCreateWithoutContactInput, InvoiceUncheckedCreateWithoutContactInput> | InvoiceCreateWithoutContactInput[] | InvoiceUncheckedCreateWithoutContactInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutContactInput | InvoiceCreateOrConnectWithoutContactInput[]
    createMany?: InvoiceCreateManyContactInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type EnumContactTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContactType
  }

  export type InvoiceUpdateManyWithoutContactNestedInput = {
    create?: XOR<InvoiceCreateWithoutContactInput, InvoiceUncheckedCreateWithoutContactInput> | InvoiceCreateWithoutContactInput[] | InvoiceUncheckedCreateWithoutContactInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutContactInput | InvoiceCreateOrConnectWithoutContactInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutContactInput | InvoiceUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: InvoiceCreateManyContactInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutContactInput | InvoiceUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutContactInput | InvoiceUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutContactNestedInput = {
    create?: XOR<InvoiceCreateWithoutContactInput, InvoiceUncheckedCreateWithoutContactInput> | InvoiceCreateWithoutContactInput[] | InvoiceUncheckedCreateWithoutContactInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutContactInput | InvoiceCreateOrConnectWithoutContactInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutContactInput | InvoiceUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: InvoiceCreateManyContactInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutContactInput | InvoiceUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutContactInput | InvoiceUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type ContactCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<ContactCreateWithoutInvoicesInput, ContactUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: ContactCreateOrConnectWithoutInvoicesInput
    connect?: ContactWhereUniqueInput
  }

  export type EnumInvoiceTypeFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceType
  }

  export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus
  }

  export type ContactUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<ContactCreateWithoutInvoicesInput, ContactUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: ContactCreateOrConnectWithoutInvoicesInput
    upsert?: ContactUpsertWithoutInvoicesInput
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutInvoicesInput, ContactUpdateWithoutInvoicesInput>, ContactUncheckedUpdateWithoutInvoicesInput>
  }

  export type JournalEntryLineCreateNestedManyWithoutCostCenterInput = {
    create?: XOR<JournalEntryLineCreateWithoutCostCenterInput, JournalEntryLineUncheckedCreateWithoutCostCenterInput> | JournalEntryLineCreateWithoutCostCenterInput[] | JournalEntryLineUncheckedCreateWithoutCostCenterInput[]
    connectOrCreate?: JournalEntryLineCreateOrConnectWithoutCostCenterInput | JournalEntryLineCreateOrConnectWithoutCostCenterInput[]
    createMany?: JournalEntryLineCreateManyCostCenterInputEnvelope
    connect?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
  }

  export type JournalEntryLineUncheckedCreateNestedManyWithoutCostCenterInput = {
    create?: XOR<JournalEntryLineCreateWithoutCostCenterInput, JournalEntryLineUncheckedCreateWithoutCostCenterInput> | JournalEntryLineCreateWithoutCostCenterInput[] | JournalEntryLineUncheckedCreateWithoutCostCenterInput[]
    connectOrCreate?: JournalEntryLineCreateOrConnectWithoutCostCenterInput | JournalEntryLineCreateOrConnectWithoutCostCenterInput[]
    createMany?: JournalEntryLineCreateManyCostCenterInputEnvelope
    connect?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
  }

  export type JournalEntryLineUpdateManyWithoutCostCenterNestedInput = {
    create?: XOR<JournalEntryLineCreateWithoutCostCenterInput, JournalEntryLineUncheckedCreateWithoutCostCenterInput> | JournalEntryLineCreateWithoutCostCenterInput[] | JournalEntryLineUncheckedCreateWithoutCostCenterInput[]
    connectOrCreate?: JournalEntryLineCreateOrConnectWithoutCostCenterInput | JournalEntryLineCreateOrConnectWithoutCostCenterInput[]
    upsert?: JournalEntryLineUpsertWithWhereUniqueWithoutCostCenterInput | JournalEntryLineUpsertWithWhereUniqueWithoutCostCenterInput[]
    createMany?: JournalEntryLineCreateManyCostCenterInputEnvelope
    set?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    disconnect?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    delete?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    connect?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    update?: JournalEntryLineUpdateWithWhereUniqueWithoutCostCenterInput | JournalEntryLineUpdateWithWhereUniqueWithoutCostCenterInput[]
    updateMany?: JournalEntryLineUpdateManyWithWhereWithoutCostCenterInput | JournalEntryLineUpdateManyWithWhereWithoutCostCenterInput[]
    deleteMany?: JournalEntryLineScalarWhereInput | JournalEntryLineScalarWhereInput[]
  }

  export type JournalEntryLineUncheckedUpdateManyWithoutCostCenterNestedInput = {
    create?: XOR<JournalEntryLineCreateWithoutCostCenterInput, JournalEntryLineUncheckedCreateWithoutCostCenterInput> | JournalEntryLineCreateWithoutCostCenterInput[] | JournalEntryLineUncheckedCreateWithoutCostCenterInput[]
    connectOrCreate?: JournalEntryLineCreateOrConnectWithoutCostCenterInput | JournalEntryLineCreateOrConnectWithoutCostCenterInput[]
    upsert?: JournalEntryLineUpsertWithWhereUniqueWithoutCostCenterInput | JournalEntryLineUpsertWithWhereUniqueWithoutCostCenterInput[]
    createMany?: JournalEntryLineCreateManyCostCenterInputEnvelope
    set?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    disconnect?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    delete?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    connect?: JournalEntryLineWhereUniqueInput | JournalEntryLineWhereUniqueInput[]
    update?: JournalEntryLineUpdateWithWhereUniqueWithoutCostCenterInput | JournalEntryLineUpdateWithWhereUniqueWithoutCostCenterInput[]
    updateMany?: JournalEntryLineUpdateManyWithWhereWithoutCostCenterInput | JournalEntryLineUpdateManyWithWhereWithoutCostCenterInput[]
    deleteMany?: JournalEntryLineScalarWhereInput | JournalEntryLineScalarWhereInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumJournalEntryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JournalEntryStatus | EnumJournalEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JournalEntryStatus[] | ListEnumJournalEntryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JournalEntryStatus[] | ListEnumJournalEntryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJournalEntryStatusFilter<$PrismaModel> | $Enums.JournalEntryStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumJournalEntryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JournalEntryStatus | EnumJournalEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JournalEntryStatus[] | ListEnumJournalEntryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JournalEntryStatus[] | ListEnumJournalEntryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJournalEntryStatusWithAggregatesFilter<$PrismaModel> | $Enums.JournalEntryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJournalEntryStatusFilter<$PrismaModel>
    _max?: NestedEnumJournalEntryStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumContactTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactType | EnumContactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContactTypeFilter<$PrismaModel> | $Enums.ContactType
  }

  export type NestedEnumContactTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactType | EnumContactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContactTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContactType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactTypeFilter<$PrismaModel>
    _max?: NestedEnumContactTypeFilter<$PrismaModel>
  }

  export type NestedEnumInvoiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceType | EnumInvoiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceTypeFilter<$PrismaModel> | $Enums.InvoiceType
  }

  export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type NestedEnumInvoiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceType | EnumInvoiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceTypeFilter<$PrismaModel>
    _max?: NestedEnumInvoiceTypeFilter<$PrismaModel>
  }

  export type NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type JournalEntryLineCreateWithoutAccountInput = {
    amount: number
    isDebit: boolean
    journalEntry: JournalEntryCreateNestedOneWithoutLinesInput
    costCenter?: CostCenterCreateNestedOneWithoutLinesInput
  }

  export type JournalEntryLineUncheckedCreateWithoutAccountInput = {
    id?: number
    journalEntryId: number
    costCenterId?: number | null
    amount: number
    isDebit: boolean
  }

  export type JournalEntryLineCreateOrConnectWithoutAccountInput = {
    where: JournalEntryLineWhereUniqueInput
    create: XOR<JournalEntryLineCreateWithoutAccountInput, JournalEntryLineUncheckedCreateWithoutAccountInput>
  }

  export type JournalEntryLineCreateManyAccountInputEnvelope = {
    data: JournalEntryLineCreateManyAccountInput | JournalEntryLineCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type JournalEntryLineUpsertWithWhereUniqueWithoutAccountInput = {
    where: JournalEntryLineWhereUniqueInput
    update: XOR<JournalEntryLineUpdateWithoutAccountInput, JournalEntryLineUncheckedUpdateWithoutAccountInput>
    create: XOR<JournalEntryLineCreateWithoutAccountInput, JournalEntryLineUncheckedCreateWithoutAccountInput>
  }

  export type JournalEntryLineUpdateWithWhereUniqueWithoutAccountInput = {
    where: JournalEntryLineWhereUniqueInput
    data: XOR<JournalEntryLineUpdateWithoutAccountInput, JournalEntryLineUncheckedUpdateWithoutAccountInput>
  }

  export type JournalEntryLineUpdateManyWithWhereWithoutAccountInput = {
    where: JournalEntryLineScalarWhereInput
    data: XOR<JournalEntryLineUpdateManyMutationInput, JournalEntryLineUncheckedUpdateManyWithoutAccountInput>
  }

  export type JournalEntryLineScalarWhereInput = {
    AND?: JournalEntryLineScalarWhereInput | JournalEntryLineScalarWhereInput[]
    OR?: JournalEntryLineScalarWhereInput[]
    NOT?: JournalEntryLineScalarWhereInput | JournalEntryLineScalarWhereInput[]
    id?: IntFilter<"JournalEntryLine"> | number
    journalEntryId?: IntFilter<"JournalEntryLine"> | number
    accountId?: IntFilter<"JournalEntryLine"> | number
    costCenterId?: IntNullableFilter<"JournalEntryLine"> | number | null
    amount?: FloatFilter<"JournalEntryLine"> | number
    isDebit?: BoolFilter<"JournalEntryLine"> | boolean
  }

  export type JournalEntryLineCreateWithoutJournalEntryInput = {
    amount: number
    isDebit: boolean
    account: AccountCreateNestedOneWithoutLinesInput
    costCenter?: CostCenterCreateNestedOneWithoutLinesInput
  }

  export type JournalEntryLineUncheckedCreateWithoutJournalEntryInput = {
    id?: number
    accountId: number
    costCenterId?: number | null
    amount: number
    isDebit: boolean
  }

  export type JournalEntryLineCreateOrConnectWithoutJournalEntryInput = {
    where: JournalEntryLineWhereUniqueInput
    create: XOR<JournalEntryLineCreateWithoutJournalEntryInput, JournalEntryLineUncheckedCreateWithoutJournalEntryInput>
  }

  export type JournalEntryLineCreateManyJournalEntryInputEnvelope = {
    data: JournalEntryLineCreateManyJournalEntryInput | JournalEntryLineCreateManyJournalEntryInput[]
    skipDuplicates?: boolean
  }

  export type JournalEntryLineUpsertWithWhereUniqueWithoutJournalEntryInput = {
    where: JournalEntryLineWhereUniqueInput
    update: XOR<JournalEntryLineUpdateWithoutJournalEntryInput, JournalEntryLineUncheckedUpdateWithoutJournalEntryInput>
    create: XOR<JournalEntryLineCreateWithoutJournalEntryInput, JournalEntryLineUncheckedCreateWithoutJournalEntryInput>
  }

  export type JournalEntryLineUpdateWithWhereUniqueWithoutJournalEntryInput = {
    where: JournalEntryLineWhereUniqueInput
    data: XOR<JournalEntryLineUpdateWithoutJournalEntryInput, JournalEntryLineUncheckedUpdateWithoutJournalEntryInput>
  }

  export type JournalEntryLineUpdateManyWithWhereWithoutJournalEntryInput = {
    where: JournalEntryLineScalarWhereInput
    data: XOR<JournalEntryLineUpdateManyMutationInput, JournalEntryLineUncheckedUpdateManyWithoutJournalEntryInput>
  }

  export type JournalEntryCreateWithoutLinesInput = {
    date: Date | string
    description: string
    status?: $Enums.JournalEntryStatus
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalEntryUncheckedCreateWithoutLinesInput = {
    id?: number
    date: Date | string
    description: string
    status?: $Enums.JournalEntryStatus
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalEntryCreateOrConnectWithoutLinesInput = {
    where: JournalEntryWhereUniqueInput
    create: XOR<JournalEntryCreateWithoutLinesInput, JournalEntryUncheckedCreateWithoutLinesInput>
  }

  export type AccountCreateWithoutLinesInput = {
    code: string
    name: string
    type: $Enums.AccountType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutLinesInput = {
    id?: number
    code: string
    name: string
    type: $Enums.AccountType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutLinesInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutLinesInput, AccountUncheckedCreateWithoutLinesInput>
  }

  export type CostCenterCreateWithoutLinesInput = {
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CostCenterUncheckedCreateWithoutLinesInput = {
    id?: number
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CostCenterCreateOrConnectWithoutLinesInput = {
    where: CostCenterWhereUniqueInput
    create: XOR<CostCenterCreateWithoutLinesInput, CostCenterUncheckedCreateWithoutLinesInput>
  }

  export type JournalEntryUpsertWithoutLinesInput = {
    update: XOR<JournalEntryUpdateWithoutLinesInput, JournalEntryUncheckedUpdateWithoutLinesInput>
    create: XOR<JournalEntryCreateWithoutLinesInput, JournalEntryUncheckedCreateWithoutLinesInput>
    where?: JournalEntryWhereInput
  }

  export type JournalEntryUpdateToOneWithWhereWithoutLinesInput = {
    where?: JournalEntryWhereInput
    data: XOR<JournalEntryUpdateWithoutLinesInput, JournalEntryUncheckedUpdateWithoutLinesInput>
  }

  export type JournalEntryUpdateWithoutLinesInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJournalEntryStatusFieldUpdateOperationsInput | $Enums.JournalEntryStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryUncheckedUpdateWithoutLinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumJournalEntryStatusFieldUpdateOperationsInput | $Enums.JournalEntryStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpsertWithoutLinesInput = {
    update: XOR<AccountUpdateWithoutLinesInput, AccountUncheckedUpdateWithoutLinesInput>
    create: XOR<AccountCreateWithoutLinesInput, AccountUncheckedCreateWithoutLinesInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutLinesInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutLinesInput, AccountUncheckedUpdateWithoutLinesInput>
  }

  export type AccountUpdateWithoutLinesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutLinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CostCenterUpsertWithoutLinesInput = {
    update: XOR<CostCenterUpdateWithoutLinesInput, CostCenterUncheckedUpdateWithoutLinesInput>
    create: XOR<CostCenterCreateWithoutLinesInput, CostCenterUncheckedCreateWithoutLinesInput>
    where?: CostCenterWhereInput
  }

  export type CostCenterUpdateToOneWithWhereWithoutLinesInput = {
    where?: CostCenterWhereInput
    data: XOR<CostCenterUpdateWithoutLinesInput, CostCenterUncheckedUpdateWithoutLinesInput>
  }

  export type CostCenterUpdateWithoutLinesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CostCenterUncheckedUpdateWithoutLinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateWithoutContactInput = {
    invoiceNo: string
    type: $Enums.InvoiceType
    date: Date | string
    dueDate: Date | string
    status?: $Enums.InvoiceStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUncheckedCreateWithoutContactInput = {
    id?: number
    invoiceNo: string
    type: $Enums.InvoiceType
    date: Date | string
    dueDate: Date | string
    status?: $Enums.InvoiceStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutContactInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutContactInput, InvoiceUncheckedCreateWithoutContactInput>
  }

  export type InvoiceCreateManyContactInputEnvelope = {
    data: InvoiceCreateManyContactInput | InvoiceCreateManyContactInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceUpsertWithWhereUniqueWithoutContactInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutContactInput, InvoiceUncheckedUpdateWithoutContactInput>
    create: XOR<InvoiceCreateWithoutContactInput, InvoiceUncheckedCreateWithoutContactInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutContactInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutContactInput, InvoiceUncheckedUpdateWithoutContactInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutContactInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutContactInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: IntFilter<"Invoice"> | number
    invoiceNo?: StringFilter<"Invoice"> | string
    type?: EnumInvoiceTypeFilter<"Invoice"> | $Enums.InvoiceType
    contactId?: IntFilter<"Invoice"> | number
    date?: DateTimeFilter<"Invoice"> | Date | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    totalAmount?: FloatFilter<"Invoice"> | number
    notes?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type ContactCreateWithoutInvoicesInput = {
    name: string
    type: $Enums.ContactType
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUncheckedCreateWithoutInvoicesInput = {
    id?: number
    name: string
    type: $Enums.ContactType
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactCreateOrConnectWithoutInvoicesInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutInvoicesInput, ContactUncheckedCreateWithoutInvoicesInput>
  }

  export type ContactUpsertWithoutInvoicesInput = {
    update: XOR<ContactUpdateWithoutInvoicesInput, ContactUncheckedUpdateWithoutInvoicesInput>
    create: XOR<ContactCreateWithoutInvoicesInput, ContactUncheckedCreateWithoutInvoicesInput>
    where?: ContactWhereInput
  }

  export type ContactUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: ContactWhereInput
    data: XOR<ContactUpdateWithoutInvoicesInput, ContactUncheckedUpdateWithoutInvoicesInput>
  }

  export type ContactUpdateWithoutInvoicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryLineCreateWithoutCostCenterInput = {
    amount: number
    isDebit: boolean
    journalEntry: JournalEntryCreateNestedOneWithoutLinesInput
    account: AccountCreateNestedOneWithoutLinesInput
  }

  export type JournalEntryLineUncheckedCreateWithoutCostCenterInput = {
    id?: number
    journalEntryId: number
    accountId: number
    amount: number
    isDebit: boolean
  }

  export type JournalEntryLineCreateOrConnectWithoutCostCenterInput = {
    where: JournalEntryLineWhereUniqueInput
    create: XOR<JournalEntryLineCreateWithoutCostCenterInput, JournalEntryLineUncheckedCreateWithoutCostCenterInput>
  }

  export type JournalEntryLineCreateManyCostCenterInputEnvelope = {
    data: JournalEntryLineCreateManyCostCenterInput | JournalEntryLineCreateManyCostCenterInput[]
    skipDuplicates?: boolean
  }

  export type JournalEntryLineUpsertWithWhereUniqueWithoutCostCenterInput = {
    where: JournalEntryLineWhereUniqueInput
    update: XOR<JournalEntryLineUpdateWithoutCostCenterInput, JournalEntryLineUncheckedUpdateWithoutCostCenterInput>
    create: XOR<JournalEntryLineCreateWithoutCostCenterInput, JournalEntryLineUncheckedCreateWithoutCostCenterInput>
  }

  export type JournalEntryLineUpdateWithWhereUniqueWithoutCostCenterInput = {
    where: JournalEntryLineWhereUniqueInput
    data: XOR<JournalEntryLineUpdateWithoutCostCenterInput, JournalEntryLineUncheckedUpdateWithoutCostCenterInput>
  }

  export type JournalEntryLineUpdateManyWithWhereWithoutCostCenterInput = {
    where: JournalEntryLineScalarWhereInput
    data: XOR<JournalEntryLineUpdateManyMutationInput, JournalEntryLineUncheckedUpdateManyWithoutCostCenterInput>
  }

  export type JournalEntryLineCreateManyAccountInput = {
    id?: number
    journalEntryId: number
    costCenterId?: number | null
    amount: number
    isDebit: boolean
  }

  export type JournalEntryLineUpdateWithoutAccountInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    isDebit?: BoolFieldUpdateOperationsInput | boolean
    journalEntry?: JournalEntryUpdateOneRequiredWithoutLinesNestedInput
    costCenter?: CostCenterUpdateOneWithoutLinesNestedInput
  }

  export type JournalEntryLineUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    journalEntryId?: IntFieldUpdateOperationsInput | number
    costCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    isDebit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JournalEntryLineUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    journalEntryId?: IntFieldUpdateOperationsInput | number
    costCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    isDebit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JournalEntryLineCreateManyJournalEntryInput = {
    id?: number
    accountId: number
    costCenterId?: number | null
    amount: number
    isDebit: boolean
  }

  export type JournalEntryLineUpdateWithoutJournalEntryInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    isDebit?: BoolFieldUpdateOperationsInput | boolean
    account?: AccountUpdateOneRequiredWithoutLinesNestedInput
    costCenter?: CostCenterUpdateOneWithoutLinesNestedInput
  }

  export type JournalEntryLineUncheckedUpdateWithoutJournalEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    costCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    isDebit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JournalEntryLineUncheckedUpdateManyWithoutJournalEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    costCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    isDebit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InvoiceCreateManyContactInput = {
    id?: number
    invoiceNo: string
    type: $Enums.InvoiceType
    date: Date | string
    dueDate: Date | string
    status?: $Enums.InvoiceStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateWithoutContactInput = {
    invoiceNo?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateWithoutContactInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceNo?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyWithoutContactInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceNo?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryLineCreateManyCostCenterInput = {
    id?: number
    journalEntryId: number
    accountId: number
    amount: number
    isDebit: boolean
  }

  export type JournalEntryLineUpdateWithoutCostCenterInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    isDebit?: BoolFieldUpdateOperationsInput | boolean
    journalEntry?: JournalEntryUpdateOneRequiredWithoutLinesNestedInput
    account?: AccountUpdateOneRequiredWithoutLinesNestedInput
  }

  export type JournalEntryLineUncheckedUpdateWithoutCostCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    journalEntryId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    isDebit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JournalEntryLineUncheckedUpdateManyWithoutCostCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    journalEntryId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    isDebit?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}