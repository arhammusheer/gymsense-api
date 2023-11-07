
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Iot
 * 
 */
export type Iot = $Result.DefaultSelection<Prisma.$IotPayload>
/**
 * Model Hub
 * 
 */
export type Hub = $Result.DefaultSelection<Prisma.$HubPayload>
/**
 * Model IotLog
 * 
 */
export type IotLog = $Result.DefaultSelection<Prisma.$IotLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CHANGE_TYPE: {
  OCCUPANCY: 'OCCUPANCY',
  BATTERY_LEVEL: 'BATTERY_LEVEL'
};

export type CHANGE_TYPE = (typeof CHANGE_TYPE)[keyof typeof CHANGE_TYPE]

}

export type CHANGE_TYPE = $Enums.CHANGE_TYPE

export const CHANGE_TYPE: typeof $Enums.CHANGE_TYPE

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Iots
 * const iots = await prisma.iot.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Iots
   * const iots = await prisma.iot.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.iot`: Exposes CRUD operations for the **Iot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Iots
    * const iots = await prisma.iot.findMany()
    * ```
    */
  get iot(): Prisma.IotDelegate<ExtArgs>;

  /**
   * `prisma.hub`: Exposes CRUD operations for the **Hub** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hubs
    * const hubs = await prisma.hub.findMany()
    * ```
    */
  get hub(): Prisma.HubDelegate<ExtArgs>;

  /**
   * `prisma.iotLog`: Exposes CRUD operations for the **IotLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IotLogs
    * const iotLogs = await prisma.iotLog.findMany()
    * ```
    */
  get iotLog(): Prisma.IotLogDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Iot: 'Iot',
    Hub: 'Hub',
    IotLog: 'IotLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'iot' | 'hub' | 'iotLog'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Iot: {
        payload: Prisma.$IotPayload<ExtArgs>
        fields: Prisma.IotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IotFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IotFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IotPayload>
          }
          findFirst: {
            args: Prisma.IotFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IotFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IotPayload>
          }
          findMany: {
            args: Prisma.IotFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IotPayload>[]
          }
          create: {
            args: Prisma.IotCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IotPayload>
          }
          createMany: {
            args: Prisma.IotCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IotDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IotPayload>
          }
          update: {
            args: Prisma.IotUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IotPayload>
          }
          deleteMany: {
            args: Prisma.IotDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IotUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IotUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IotPayload>
          }
          aggregate: {
            args: Prisma.IotAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIot>
          }
          groupBy: {
            args: Prisma.IotGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IotGroupByOutputType>[]
          }
          count: {
            args: Prisma.IotCountArgs<ExtArgs>,
            result: $Utils.Optional<IotCountAggregateOutputType> | number
          }
        }
      }
      Hub: {
        payload: Prisma.$HubPayload<ExtArgs>
        fields: Prisma.HubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HubFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HubFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HubPayload>
          }
          findFirst: {
            args: Prisma.HubFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HubFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HubPayload>
          }
          findMany: {
            args: Prisma.HubFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HubPayload>[]
          }
          create: {
            args: Prisma.HubCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HubPayload>
          }
          createMany: {
            args: Prisma.HubCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HubDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HubPayload>
          }
          update: {
            args: Prisma.HubUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HubPayload>
          }
          deleteMany: {
            args: Prisma.HubDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HubUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HubUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HubPayload>
          }
          aggregate: {
            args: Prisma.HubAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHub>
          }
          groupBy: {
            args: Prisma.HubGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HubGroupByOutputType>[]
          }
          count: {
            args: Prisma.HubCountArgs<ExtArgs>,
            result: $Utils.Optional<HubCountAggregateOutputType> | number
          }
        }
      }
      IotLog: {
        payload: Prisma.$IotLogPayload<ExtArgs>
        fields: Prisma.IotLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IotLogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IotLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IotLogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IotLogPayload>
          }
          findFirst: {
            args: Prisma.IotLogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IotLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IotLogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IotLogPayload>
          }
          findMany: {
            args: Prisma.IotLogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IotLogPayload>[]
          }
          create: {
            args: Prisma.IotLogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IotLogPayload>
          }
          createMany: {
            args: Prisma.IotLogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IotLogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IotLogPayload>
          }
          update: {
            args: Prisma.IotLogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IotLogPayload>
          }
          deleteMany: {
            args: Prisma.IotLogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IotLogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IotLogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IotLogPayload>
          }
          aggregate: {
            args: Prisma.IotLogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIotLog>
          }
          groupBy: {
            args: Prisma.IotLogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IotLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.IotLogCountArgs<ExtArgs>,
            result: $Utils.Optional<IotLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type IotCountOutputType
   */

  export type IotCountOutputType = {
    IotLog: number
  }

  export type IotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    IotLog?: boolean | IotCountOutputTypeCountIotLogArgs
  }

  // Custom InputTypes

  /**
   * IotCountOutputType without action
   */
  export type IotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotCountOutputType
     */
    select?: IotCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * IotCountOutputType without action
   */
  export type IotCountOutputTypeCountIotLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IotLogWhereInput
  }



  /**
   * Count Type HubCountOutputType
   */

  export type HubCountOutputType = {
    IotLog: number
  }

  export type HubCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    IotLog?: boolean | HubCountOutputTypeCountIotLogArgs
  }

  // Custom InputTypes

  /**
   * HubCountOutputType without action
   */
  export type HubCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HubCountOutputType
     */
    select?: HubCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * HubCountOutputType without action
   */
  export type HubCountOutputTypeCountIotLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IotLogWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Iot
   */

  export type AggregateIot = {
    _count: IotCountAggregateOutputType | null
    _avg: IotAvgAggregateOutputType | null
    _sum: IotSumAggregateOutputType | null
    _min: IotMinAggregateOutputType | null
    _max: IotMaxAggregateOutputType | null
  }

  export type IotAvgAggregateOutputType = {
    batteryLevel: number | null
  }

  export type IotSumAggregateOutputType = {
    batteryLevel: number | null
  }

  export type IotMinAggregateOutputType = {
    id: string | null
    key: string | null
    occupancy: boolean | null
    batteryLevel: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IotMaxAggregateOutputType = {
    id: string | null
    key: string | null
    occupancy: boolean | null
    batteryLevel: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IotCountAggregateOutputType = {
    id: number
    key: number
    occupancy: number
    batteryLevel: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IotAvgAggregateInputType = {
    batteryLevel?: true
  }

  export type IotSumAggregateInputType = {
    batteryLevel?: true
  }

  export type IotMinAggregateInputType = {
    id?: true
    key?: true
    occupancy?: true
    batteryLevel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IotMaxAggregateInputType = {
    id?: true
    key?: true
    occupancy?: true
    batteryLevel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IotCountAggregateInputType = {
    id?: true
    key?: true
    occupancy?: true
    batteryLevel?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Iot to aggregate.
     */
    where?: IotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Iots to fetch.
     */
    orderBy?: IotOrderByWithRelationInput | IotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Iots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Iots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Iots
    **/
    _count?: true | IotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IotMaxAggregateInputType
  }

  export type GetIotAggregateType<T extends IotAggregateArgs> = {
        [P in keyof T & keyof AggregateIot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIot[P]>
      : GetScalarType<T[P], AggregateIot[P]>
  }




  export type IotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IotWhereInput
    orderBy?: IotOrderByWithAggregationInput | IotOrderByWithAggregationInput[]
    by: IotScalarFieldEnum[] | IotScalarFieldEnum
    having?: IotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IotCountAggregateInputType | true
    _avg?: IotAvgAggregateInputType
    _sum?: IotSumAggregateInputType
    _min?: IotMinAggregateInputType
    _max?: IotMaxAggregateInputType
  }

  export type IotGroupByOutputType = {
    id: string
    key: string
    occupancy: boolean
    batteryLevel: number
    createdAt: Date
    updatedAt: Date
    _count: IotCountAggregateOutputType | null
    _avg: IotAvgAggregateOutputType | null
    _sum: IotSumAggregateOutputType | null
    _min: IotMinAggregateOutputType | null
    _max: IotMaxAggregateOutputType | null
  }

  type GetIotGroupByPayload<T extends IotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IotGroupByOutputType[P]>
            : GetScalarType<T[P], IotGroupByOutputType[P]>
        }
      >
    >


  export type IotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    occupancy?: boolean
    batteryLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    IotLog?: boolean | Iot$IotLogArgs<ExtArgs>
    _count?: boolean | IotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["iot"]>

  export type IotSelectScalar = {
    id?: boolean
    key?: boolean
    occupancy?: boolean
    batteryLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    IotLog?: boolean | Iot$IotLogArgs<ExtArgs>
    _count?: boolean | IotCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $IotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Iot"
    objects: {
      IotLog: Prisma.$IotLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      occupancy: boolean
      batteryLevel: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["iot"]>
    composites: {}
  }


  type IotGetPayload<S extends boolean | null | undefined | IotDefaultArgs> = $Result.GetResult<Prisma.$IotPayload, S>

  type IotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IotFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: IotCountAggregateInputType | true
    }

  export interface IotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Iot'], meta: { name: 'Iot' } }
    /**
     * Find zero or one Iot that matches the filter.
     * @param {IotFindUniqueArgs} args - Arguments to find a Iot
     * @example
     * // Get one Iot
     * const iot = await prisma.iot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IotFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IotFindUniqueArgs<ExtArgs>>
    ): Prisma__IotClient<$Result.GetResult<Prisma.$IotPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Iot that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IotFindUniqueOrThrowArgs} args - Arguments to find a Iot
     * @example
     * // Get one Iot
     * const iot = await prisma.iot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IotFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IotFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IotClient<$Result.GetResult<Prisma.$IotPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Iot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotFindFirstArgs} args - Arguments to find a Iot
     * @example
     * // Get one Iot
     * const iot = await prisma.iot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IotFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IotFindFirstArgs<ExtArgs>>
    ): Prisma__IotClient<$Result.GetResult<Prisma.$IotPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Iot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotFindFirstOrThrowArgs} args - Arguments to find a Iot
     * @example
     * // Get one Iot
     * const iot = await prisma.iot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IotFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IotFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IotClient<$Result.GetResult<Prisma.$IotPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Iots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Iots
     * const iots = await prisma.iot.findMany()
     * 
     * // Get first 10 Iots
     * const iots = await prisma.iot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const iotWithIdOnly = await prisma.iot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IotFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IotFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IotPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Iot.
     * @param {IotCreateArgs} args - Arguments to create a Iot.
     * @example
     * // Create one Iot
     * const Iot = await prisma.iot.create({
     *   data: {
     *     // ... data to create a Iot
     *   }
     * })
     * 
    **/
    create<T extends IotCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IotCreateArgs<ExtArgs>>
    ): Prisma__IotClient<$Result.GetResult<Prisma.$IotPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Iots.
     *     @param {IotCreateManyArgs} args - Arguments to create many Iots.
     *     @example
     *     // Create many Iots
     *     const iot = await prisma.iot.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IotCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IotCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Iot.
     * @param {IotDeleteArgs} args - Arguments to delete one Iot.
     * @example
     * // Delete one Iot
     * const Iot = await prisma.iot.delete({
     *   where: {
     *     // ... filter to delete one Iot
     *   }
     * })
     * 
    **/
    delete<T extends IotDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IotDeleteArgs<ExtArgs>>
    ): Prisma__IotClient<$Result.GetResult<Prisma.$IotPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Iot.
     * @param {IotUpdateArgs} args - Arguments to update one Iot.
     * @example
     * // Update one Iot
     * const iot = await prisma.iot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IotUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IotUpdateArgs<ExtArgs>>
    ): Prisma__IotClient<$Result.GetResult<Prisma.$IotPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Iots.
     * @param {IotDeleteManyArgs} args - Arguments to filter Iots to delete.
     * @example
     * // Delete a few Iots
     * const { count } = await prisma.iot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IotDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IotDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Iots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Iots
     * const iot = await prisma.iot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IotUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IotUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Iot.
     * @param {IotUpsertArgs} args - Arguments to update or create a Iot.
     * @example
     * // Update or create a Iot
     * const iot = await prisma.iot.upsert({
     *   create: {
     *     // ... data to create a Iot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Iot we want to update
     *   }
     * })
    **/
    upsert<T extends IotUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IotUpsertArgs<ExtArgs>>
    ): Prisma__IotClient<$Result.GetResult<Prisma.$IotPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Iots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotCountArgs} args - Arguments to filter Iots to count.
     * @example
     * // Count the number of Iots
     * const count = await prisma.iot.count({
     *   where: {
     *     // ... the filter for the Iots we want to count
     *   }
     * })
    **/
    count<T extends IotCountArgs>(
      args?: Subset<T, IotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Iot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IotAggregateArgs>(args: Subset<T, IotAggregateArgs>): Prisma.PrismaPromise<GetIotAggregateType<T>>

    /**
     * Group by Iot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotGroupByArgs} args - Group by arguments.
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
      T extends IotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IotGroupByArgs['orderBy'] }
        : { orderBy?: IotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Iot model
   */
  readonly fields: IotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Iot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    IotLog<T extends Iot$IotLogArgs<ExtArgs> = {}>(args?: Subset<T, Iot$IotLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IotLogPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Iot model
   */ 
  interface IotFieldRefs {
    readonly id: FieldRef<"Iot", 'String'>
    readonly key: FieldRef<"Iot", 'String'>
    readonly occupancy: FieldRef<"Iot", 'Boolean'>
    readonly batteryLevel: FieldRef<"Iot", 'Int'>
    readonly createdAt: FieldRef<"Iot", 'DateTime'>
    readonly updatedAt: FieldRef<"Iot", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Iot findUnique
   */
  export type IotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Iot
     */
    select?: IotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotInclude<ExtArgs> | null
    /**
     * Filter, which Iot to fetch.
     */
    where: IotWhereUniqueInput
  }


  /**
   * Iot findUniqueOrThrow
   */
  export type IotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Iot
     */
    select?: IotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotInclude<ExtArgs> | null
    /**
     * Filter, which Iot to fetch.
     */
    where: IotWhereUniqueInput
  }


  /**
   * Iot findFirst
   */
  export type IotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Iot
     */
    select?: IotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotInclude<ExtArgs> | null
    /**
     * Filter, which Iot to fetch.
     */
    where?: IotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Iots to fetch.
     */
    orderBy?: IotOrderByWithRelationInput | IotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Iots.
     */
    cursor?: IotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Iots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Iots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Iots.
     */
    distinct?: IotScalarFieldEnum | IotScalarFieldEnum[]
  }


  /**
   * Iot findFirstOrThrow
   */
  export type IotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Iot
     */
    select?: IotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotInclude<ExtArgs> | null
    /**
     * Filter, which Iot to fetch.
     */
    where?: IotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Iots to fetch.
     */
    orderBy?: IotOrderByWithRelationInput | IotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Iots.
     */
    cursor?: IotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Iots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Iots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Iots.
     */
    distinct?: IotScalarFieldEnum | IotScalarFieldEnum[]
  }


  /**
   * Iot findMany
   */
  export type IotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Iot
     */
    select?: IotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotInclude<ExtArgs> | null
    /**
     * Filter, which Iots to fetch.
     */
    where?: IotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Iots to fetch.
     */
    orderBy?: IotOrderByWithRelationInput | IotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Iots.
     */
    cursor?: IotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Iots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Iots.
     */
    skip?: number
    distinct?: IotScalarFieldEnum | IotScalarFieldEnum[]
  }


  /**
   * Iot create
   */
  export type IotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Iot
     */
    select?: IotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotInclude<ExtArgs> | null
    /**
     * The data needed to create a Iot.
     */
    data: XOR<IotCreateInput, IotUncheckedCreateInput>
  }


  /**
   * Iot createMany
   */
  export type IotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Iots.
     */
    data: IotCreateManyInput | IotCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Iot update
   */
  export type IotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Iot
     */
    select?: IotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotInclude<ExtArgs> | null
    /**
     * The data needed to update a Iot.
     */
    data: XOR<IotUpdateInput, IotUncheckedUpdateInput>
    /**
     * Choose, which Iot to update.
     */
    where: IotWhereUniqueInput
  }


  /**
   * Iot updateMany
   */
  export type IotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Iots.
     */
    data: XOR<IotUpdateManyMutationInput, IotUncheckedUpdateManyInput>
    /**
     * Filter which Iots to update
     */
    where?: IotWhereInput
  }


  /**
   * Iot upsert
   */
  export type IotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Iot
     */
    select?: IotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotInclude<ExtArgs> | null
    /**
     * The filter to search for the Iot to update in case it exists.
     */
    where: IotWhereUniqueInput
    /**
     * In case the Iot found by the `where` argument doesn't exist, create a new Iot with this data.
     */
    create: XOR<IotCreateInput, IotUncheckedCreateInput>
    /**
     * In case the Iot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IotUpdateInput, IotUncheckedUpdateInput>
  }


  /**
   * Iot delete
   */
  export type IotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Iot
     */
    select?: IotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotInclude<ExtArgs> | null
    /**
     * Filter which Iot to delete.
     */
    where: IotWhereUniqueInput
  }


  /**
   * Iot deleteMany
   */
  export type IotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Iots to delete
     */
    where?: IotWhereInput
  }


  /**
   * Iot.IotLog
   */
  export type Iot$IotLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotLog
     */
    select?: IotLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotLogInclude<ExtArgs> | null
    where?: IotLogWhereInput
    orderBy?: IotLogOrderByWithRelationInput | IotLogOrderByWithRelationInput[]
    cursor?: IotLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IotLogScalarFieldEnum | IotLogScalarFieldEnum[]
  }


  /**
   * Iot without action
   */
  export type IotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Iot
     */
    select?: IotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotInclude<ExtArgs> | null
  }



  /**
   * Model Hub
   */

  export type AggregateHub = {
    _count: HubCountAggregateOutputType | null
    _min: HubMinAggregateOutputType | null
    _max: HubMaxAggregateOutputType | null
  }

  export type HubMinAggregateOutputType = {
    id: string | null
    key: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HubMaxAggregateOutputType = {
    id: string | null
    key: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HubCountAggregateOutputType = {
    id: number
    key: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HubMinAggregateInputType = {
    id?: true
    key?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HubMaxAggregateInputType = {
    id?: true
    key?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HubCountAggregateInputType = {
    id?: true
    key?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HubAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hub to aggregate.
     */
    where?: HubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hubs to fetch.
     */
    orderBy?: HubOrderByWithRelationInput | HubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hubs
    **/
    _count?: true | HubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HubMaxAggregateInputType
  }

  export type GetHubAggregateType<T extends HubAggregateArgs> = {
        [P in keyof T & keyof AggregateHub]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHub[P]>
      : GetScalarType<T[P], AggregateHub[P]>
  }




  export type HubGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HubWhereInput
    orderBy?: HubOrderByWithAggregationInput | HubOrderByWithAggregationInput[]
    by: HubScalarFieldEnum[] | HubScalarFieldEnum
    having?: HubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HubCountAggregateInputType | true
    _min?: HubMinAggregateInputType
    _max?: HubMaxAggregateInputType
  }

  export type HubGroupByOutputType = {
    id: string
    key: string
    createdAt: Date
    updatedAt: Date
    _count: HubCountAggregateOutputType | null
    _min: HubMinAggregateOutputType | null
    _max: HubMaxAggregateOutputType | null
  }

  type GetHubGroupByPayload<T extends HubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HubGroupByOutputType[P]>
            : GetScalarType<T[P], HubGroupByOutputType[P]>
        }
      >
    >


  export type HubSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    IotLog?: boolean | Hub$IotLogArgs<ExtArgs>
    _count?: boolean | HubCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hub"]>

  export type HubSelectScalar = {
    id?: boolean
    key?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HubInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    IotLog?: boolean | Hub$IotLogArgs<ExtArgs>
    _count?: boolean | HubCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $HubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hub"
    objects: {
      IotLog: Prisma.$IotLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hub"]>
    composites: {}
  }


  type HubGetPayload<S extends boolean | null | undefined | HubDefaultArgs> = $Result.GetResult<Prisma.$HubPayload, S>

  type HubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HubFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: HubCountAggregateInputType | true
    }

  export interface HubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hub'], meta: { name: 'Hub' } }
    /**
     * Find zero or one Hub that matches the filter.
     * @param {HubFindUniqueArgs} args - Arguments to find a Hub
     * @example
     * // Get one Hub
     * const hub = await prisma.hub.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HubFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HubFindUniqueArgs<ExtArgs>>
    ): Prisma__HubClient<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Hub that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HubFindUniqueOrThrowArgs} args - Arguments to find a Hub
     * @example
     * // Get one Hub
     * const hub = await prisma.hub.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HubFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HubFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HubClient<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Hub that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HubFindFirstArgs} args - Arguments to find a Hub
     * @example
     * // Get one Hub
     * const hub = await prisma.hub.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HubFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HubFindFirstArgs<ExtArgs>>
    ): Prisma__HubClient<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Hub that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HubFindFirstOrThrowArgs} args - Arguments to find a Hub
     * @example
     * // Get one Hub
     * const hub = await prisma.hub.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HubFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HubFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HubClient<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Hubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HubFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hubs
     * const hubs = await prisma.hub.findMany()
     * 
     * // Get first 10 Hubs
     * const hubs = await prisma.hub.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hubWithIdOnly = await prisma.hub.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HubFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HubFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Hub.
     * @param {HubCreateArgs} args - Arguments to create a Hub.
     * @example
     * // Create one Hub
     * const Hub = await prisma.hub.create({
     *   data: {
     *     // ... data to create a Hub
     *   }
     * })
     * 
    **/
    create<T extends HubCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HubCreateArgs<ExtArgs>>
    ): Prisma__HubClient<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Hubs.
     *     @param {HubCreateManyArgs} args - Arguments to create many Hubs.
     *     @example
     *     // Create many Hubs
     *     const hub = await prisma.hub.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HubCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HubCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hub.
     * @param {HubDeleteArgs} args - Arguments to delete one Hub.
     * @example
     * // Delete one Hub
     * const Hub = await prisma.hub.delete({
     *   where: {
     *     // ... filter to delete one Hub
     *   }
     * })
     * 
    **/
    delete<T extends HubDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HubDeleteArgs<ExtArgs>>
    ): Prisma__HubClient<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Hub.
     * @param {HubUpdateArgs} args - Arguments to update one Hub.
     * @example
     * // Update one Hub
     * const hub = await prisma.hub.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HubUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HubUpdateArgs<ExtArgs>>
    ): Prisma__HubClient<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Hubs.
     * @param {HubDeleteManyArgs} args - Arguments to filter Hubs to delete.
     * @example
     * // Delete a few Hubs
     * const { count } = await prisma.hub.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HubDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HubDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hubs
     * const hub = await prisma.hub.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HubUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HubUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hub.
     * @param {HubUpsertArgs} args - Arguments to update or create a Hub.
     * @example
     * // Update or create a Hub
     * const hub = await prisma.hub.upsert({
     *   create: {
     *     // ... data to create a Hub
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hub we want to update
     *   }
     * })
    **/
    upsert<T extends HubUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HubUpsertArgs<ExtArgs>>
    ): Prisma__HubClient<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Hubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HubCountArgs} args - Arguments to filter Hubs to count.
     * @example
     * // Count the number of Hubs
     * const count = await prisma.hub.count({
     *   where: {
     *     // ... the filter for the Hubs we want to count
     *   }
     * })
    **/
    count<T extends HubCountArgs>(
      args?: Subset<T, HubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hub.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HubAggregateArgs>(args: Subset<T, HubAggregateArgs>): Prisma.PrismaPromise<GetHubAggregateType<T>>

    /**
     * Group by Hub.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HubGroupByArgs} args - Group by arguments.
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
      T extends HubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HubGroupByArgs['orderBy'] }
        : { orderBy?: HubGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hub model
   */
  readonly fields: HubFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hub.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    IotLog<T extends Hub$IotLogArgs<ExtArgs> = {}>(args?: Subset<T, Hub$IotLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IotLogPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Hub model
   */ 
  interface HubFieldRefs {
    readonly id: FieldRef<"Hub", 'String'>
    readonly key: FieldRef<"Hub", 'String'>
    readonly createdAt: FieldRef<"Hub", 'DateTime'>
    readonly updatedAt: FieldRef<"Hub", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Hub findUnique
   */
  export type HubFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
    /**
     * Filter, which Hub to fetch.
     */
    where: HubWhereUniqueInput
  }


  /**
   * Hub findUniqueOrThrow
   */
  export type HubFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
    /**
     * Filter, which Hub to fetch.
     */
    where: HubWhereUniqueInput
  }


  /**
   * Hub findFirst
   */
  export type HubFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
    /**
     * Filter, which Hub to fetch.
     */
    where?: HubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hubs to fetch.
     */
    orderBy?: HubOrderByWithRelationInput | HubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hubs.
     */
    cursor?: HubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hubs.
     */
    distinct?: HubScalarFieldEnum | HubScalarFieldEnum[]
  }


  /**
   * Hub findFirstOrThrow
   */
  export type HubFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
    /**
     * Filter, which Hub to fetch.
     */
    where?: HubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hubs to fetch.
     */
    orderBy?: HubOrderByWithRelationInput | HubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hubs.
     */
    cursor?: HubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hubs.
     */
    distinct?: HubScalarFieldEnum | HubScalarFieldEnum[]
  }


  /**
   * Hub findMany
   */
  export type HubFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
    /**
     * Filter, which Hubs to fetch.
     */
    where?: HubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hubs to fetch.
     */
    orderBy?: HubOrderByWithRelationInput | HubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hubs.
     */
    cursor?: HubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hubs.
     */
    skip?: number
    distinct?: HubScalarFieldEnum | HubScalarFieldEnum[]
  }


  /**
   * Hub create
   */
  export type HubCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
    /**
     * The data needed to create a Hub.
     */
    data: XOR<HubCreateInput, HubUncheckedCreateInput>
  }


  /**
   * Hub createMany
   */
  export type HubCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hubs.
     */
    data: HubCreateManyInput | HubCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Hub update
   */
  export type HubUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
    /**
     * The data needed to update a Hub.
     */
    data: XOR<HubUpdateInput, HubUncheckedUpdateInput>
    /**
     * Choose, which Hub to update.
     */
    where: HubWhereUniqueInput
  }


  /**
   * Hub updateMany
   */
  export type HubUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hubs.
     */
    data: XOR<HubUpdateManyMutationInput, HubUncheckedUpdateManyInput>
    /**
     * Filter which Hubs to update
     */
    where?: HubWhereInput
  }


  /**
   * Hub upsert
   */
  export type HubUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
    /**
     * The filter to search for the Hub to update in case it exists.
     */
    where: HubWhereUniqueInput
    /**
     * In case the Hub found by the `where` argument doesn't exist, create a new Hub with this data.
     */
    create: XOR<HubCreateInput, HubUncheckedCreateInput>
    /**
     * In case the Hub was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HubUpdateInput, HubUncheckedUpdateInput>
  }


  /**
   * Hub delete
   */
  export type HubDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
    /**
     * Filter which Hub to delete.
     */
    where: HubWhereUniqueInput
  }


  /**
   * Hub deleteMany
   */
  export type HubDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hubs to delete
     */
    where?: HubWhereInput
  }


  /**
   * Hub.IotLog
   */
  export type Hub$IotLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotLog
     */
    select?: IotLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotLogInclude<ExtArgs> | null
    where?: IotLogWhereInput
    orderBy?: IotLogOrderByWithRelationInput | IotLogOrderByWithRelationInput[]
    cursor?: IotLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IotLogScalarFieldEnum | IotLogScalarFieldEnum[]
  }


  /**
   * Hub without action
   */
  export type HubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hub
     */
    select?: HubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HubInclude<ExtArgs> | null
  }



  /**
   * Model IotLog
   */

  export type AggregateIotLog = {
    _count: IotLogCountAggregateOutputType | null
    _min: IotLogMinAggregateOutputType | null
    _max: IotLogMaxAggregateOutputType | null
  }

  export type IotLogMinAggregateOutputType = {
    id: string | null
    iotId: string | null
    hubId: string | null
    changeType: $Enums.CHANGE_TYPE | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IotLogMaxAggregateOutputType = {
    id: string | null
    iotId: string | null
    hubId: string | null
    changeType: $Enums.CHANGE_TYPE | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IotLogCountAggregateOutputType = {
    id: number
    iotId: number
    hubId: number
    changeType: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IotLogMinAggregateInputType = {
    id?: true
    iotId?: true
    hubId?: true
    changeType?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IotLogMaxAggregateInputType = {
    id?: true
    iotId?: true
    hubId?: true
    changeType?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IotLogCountAggregateInputType = {
    id?: true
    iotId?: true
    hubId?: true
    changeType?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IotLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IotLog to aggregate.
     */
    where?: IotLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IotLogs to fetch.
     */
    orderBy?: IotLogOrderByWithRelationInput | IotLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IotLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IotLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IotLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IotLogs
    **/
    _count?: true | IotLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IotLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IotLogMaxAggregateInputType
  }

  export type GetIotLogAggregateType<T extends IotLogAggregateArgs> = {
        [P in keyof T & keyof AggregateIotLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIotLog[P]>
      : GetScalarType<T[P], AggregateIotLog[P]>
  }




  export type IotLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IotLogWhereInput
    orderBy?: IotLogOrderByWithAggregationInput | IotLogOrderByWithAggregationInput[]
    by: IotLogScalarFieldEnum[] | IotLogScalarFieldEnum
    having?: IotLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IotLogCountAggregateInputType | true
    _min?: IotLogMinAggregateInputType
    _max?: IotLogMaxAggregateInputType
  }

  export type IotLogGroupByOutputType = {
    id: string
    iotId: string
    hubId: string
    changeType: $Enums.CHANGE_TYPE
    value: string
    createdAt: Date
    updatedAt: Date
    _count: IotLogCountAggregateOutputType | null
    _min: IotLogMinAggregateOutputType | null
    _max: IotLogMaxAggregateOutputType | null
  }

  type GetIotLogGroupByPayload<T extends IotLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IotLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IotLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IotLogGroupByOutputType[P]>
            : GetScalarType<T[P], IotLogGroupByOutputType[P]>
        }
      >
    >


  export type IotLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    iotId?: boolean
    hubId?: boolean
    changeType?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    iot?: boolean | IotDefaultArgs<ExtArgs>
    hub?: boolean | HubDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["iotLog"]>

  export type IotLogSelectScalar = {
    id?: boolean
    iotId?: boolean
    hubId?: boolean
    changeType?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IotLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    iot?: boolean | IotDefaultArgs<ExtArgs>
    hub?: boolean | HubDefaultArgs<ExtArgs>
  }


  export type $IotLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IotLog"
    objects: {
      iot: Prisma.$IotPayload<ExtArgs>
      hub: Prisma.$HubPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      iotId: string
      hubId: string
      changeType: $Enums.CHANGE_TYPE
      value: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["iotLog"]>
    composites: {}
  }


  type IotLogGetPayload<S extends boolean | null | undefined | IotLogDefaultArgs> = $Result.GetResult<Prisma.$IotLogPayload, S>

  type IotLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IotLogFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: IotLogCountAggregateInputType | true
    }

  export interface IotLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IotLog'], meta: { name: 'IotLog' } }
    /**
     * Find zero or one IotLog that matches the filter.
     * @param {IotLogFindUniqueArgs} args - Arguments to find a IotLog
     * @example
     * // Get one IotLog
     * const iotLog = await prisma.iotLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IotLogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IotLogFindUniqueArgs<ExtArgs>>
    ): Prisma__IotLogClient<$Result.GetResult<Prisma.$IotLogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one IotLog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IotLogFindUniqueOrThrowArgs} args - Arguments to find a IotLog
     * @example
     * // Get one IotLog
     * const iotLog = await prisma.iotLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IotLogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IotLogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IotLogClient<$Result.GetResult<Prisma.$IotLogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first IotLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotLogFindFirstArgs} args - Arguments to find a IotLog
     * @example
     * // Get one IotLog
     * const iotLog = await prisma.iotLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IotLogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IotLogFindFirstArgs<ExtArgs>>
    ): Prisma__IotLogClient<$Result.GetResult<Prisma.$IotLogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first IotLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotLogFindFirstOrThrowArgs} args - Arguments to find a IotLog
     * @example
     * // Get one IotLog
     * const iotLog = await prisma.iotLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IotLogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IotLogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IotLogClient<$Result.GetResult<Prisma.$IotLogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more IotLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotLogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IotLogs
     * const iotLogs = await prisma.iotLog.findMany()
     * 
     * // Get first 10 IotLogs
     * const iotLogs = await prisma.iotLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const iotLogWithIdOnly = await prisma.iotLog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IotLogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IotLogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IotLogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a IotLog.
     * @param {IotLogCreateArgs} args - Arguments to create a IotLog.
     * @example
     * // Create one IotLog
     * const IotLog = await prisma.iotLog.create({
     *   data: {
     *     // ... data to create a IotLog
     *   }
     * })
     * 
    **/
    create<T extends IotLogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IotLogCreateArgs<ExtArgs>>
    ): Prisma__IotLogClient<$Result.GetResult<Prisma.$IotLogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many IotLogs.
     *     @param {IotLogCreateManyArgs} args - Arguments to create many IotLogs.
     *     @example
     *     // Create many IotLogs
     *     const iotLog = await prisma.iotLog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IotLogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IotLogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IotLog.
     * @param {IotLogDeleteArgs} args - Arguments to delete one IotLog.
     * @example
     * // Delete one IotLog
     * const IotLog = await prisma.iotLog.delete({
     *   where: {
     *     // ... filter to delete one IotLog
     *   }
     * })
     * 
    **/
    delete<T extends IotLogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IotLogDeleteArgs<ExtArgs>>
    ): Prisma__IotLogClient<$Result.GetResult<Prisma.$IotLogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one IotLog.
     * @param {IotLogUpdateArgs} args - Arguments to update one IotLog.
     * @example
     * // Update one IotLog
     * const iotLog = await prisma.iotLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IotLogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IotLogUpdateArgs<ExtArgs>>
    ): Prisma__IotLogClient<$Result.GetResult<Prisma.$IotLogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more IotLogs.
     * @param {IotLogDeleteManyArgs} args - Arguments to filter IotLogs to delete.
     * @example
     * // Delete a few IotLogs
     * const { count } = await prisma.iotLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IotLogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IotLogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IotLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IotLogs
     * const iotLog = await prisma.iotLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IotLogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IotLogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IotLog.
     * @param {IotLogUpsertArgs} args - Arguments to update or create a IotLog.
     * @example
     * // Update or create a IotLog
     * const iotLog = await prisma.iotLog.upsert({
     *   create: {
     *     // ... data to create a IotLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IotLog we want to update
     *   }
     * })
    **/
    upsert<T extends IotLogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IotLogUpsertArgs<ExtArgs>>
    ): Prisma__IotLogClient<$Result.GetResult<Prisma.$IotLogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of IotLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotLogCountArgs} args - Arguments to filter IotLogs to count.
     * @example
     * // Count the number of IotLogs
     * const count = await prisma.iotLog.count({
     *   where: {
     *     // ... the filter for the IotLogs we want to count
     *   }
     * })
    **/
    count<T extends IotLogCountArgs>(
      args?: Subset<T, IotLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IotLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IotLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IotLogAggregateArgs>(args: Subset<T, IotLogAggregateArgs>): Prisma.PrismaPromise<GetIotLogAggregateType<T>>

    /**
     * Group by IotLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IotLogGroupByArgs} args - Group by arguments.
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
      T extends IotLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IotLogGroupByArgs['orderBy'] }
        : { orderBy?: IotLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IotLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIotLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IotLog model
   */
  readonly fields: IotLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IotLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IotLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    iot<T extends IotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IotDefaultArgs<ExtArgs>>): Prisma__IotClient<$Result.GetResult<Prisma.$IotPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    hub<T extends HubDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HubDefaultArgs<ExtArgs>>): Prisma__HubClient<$Result.GetResult<Prisma.$HubPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the IotLog model
   */ 
  interface IotLogFieldRefs {
    readonly id: FieldRef<"IotLog", 'String'>
    readonly iotId: FieldRef<"IotLog", 'String'>
    readonly hubId: FieldRef<"IotLog", 'String'>
    readonly changeType: FieldRef<"IotLog", 'CHANGE_TYPE'>
    readonly value: FieldRef<"IotLog", 'String'>
    readonly createdAt: FieldRef<"IotLog", 'DateTime'>
    readonly updatedAt: FieldRef<"IotLog", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * IotLog findUnique
   */
  export type IotLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotLog
     */
    select?: IotLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotLogInclude<ExtArgs> | null
    /**
     * Filter, which IotLog to fetch.
     */
    where: IotLogWhereUniqueInput
  }


  /**
   * IotLog findUniqueOrThrow
   */
  export type IotLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotLog
     */
    select?: IotLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotLogInclude<ExtArgs> | null
    /**
     * Filter, which IotLog to fetch.
     */
    where: IotLogWhereUniqueInput
  }


  /**
   * IotLog findFirst
   */
  export type IotLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotLog
     */
    select?: IotLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotLogInclude<ExtArgs> | null
    /**
     * Filter, which IotLog to fetch.
     */
    where?: IotLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IotLogs to fetch.
     */
    orderBy?: IotLogOrderByWithRelationInput | IotLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IotLogs.
     */
    cursor?: IotLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IotLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IotLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IotLogs.
     */
    distinct?: IotLogScalarFieldEnum | IotLogScalarFieldEnum[]
  }


  /**
   * IotLog findFirstOrThrow
   */
  export type IotLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotLog
     */
    select?: IotLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotLogInclude<ExtArgs> | null
    /**
     * Filter, which IotLog to fetch.
     */
    where?: IotLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IotLogs to fetch.
     */
    orderBy?: IotLogOrderByWithRelationInput | IotLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IotLogs.
     */
    cursor?: IotLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IotLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IotLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IotLogs.
     */
    distinct?: IotLogScalarFieldEnum | IotLogScalarFieldEnum[]
  }


  /**
   * IotLog findMany
   */
  export type IotLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotLog
     */
    select?: IotLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotLogInclude<ExtArgs> | null
    /**
     * Filter, which IotLogs to fetch.
     */
    where?: IotLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IotLogs to fetch.
     */
    orderBy?: IotLogOrderByWithRelationInput | IotLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IotLogs.
     */
    cursor?: IotLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IotLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IotLogs.
     */
    skip?: number
    distinct?: IotLogScalarFieldEnum | IotLogScalarFieldEnum[]
  }


  /**
   * IotLog create
   */
  export type IotLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotLog
     */
    select?: IotLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotLogInclude<ExtArgs> | null
    /**
     * The data needed to create a IotLog.
     */
    data: XOR<IotLogCreateInput, IotLogUncheckedCreateInput>
  }


  /**
   * IotLog createMany
   */
  export type IotLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IotLogs.
     */
    data: IotLogCreateManyInput | IotLogCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * IotLog update
   */
  export type IotLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotLog
     */
    select?: IotLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotLogInclude<ExtArgs> | null
    /**
     * The data needed to update a IotLog.
     */
    data: XOR<IotLogUpdateInput, IotLogUncheckedUpdateInput>
    /**
     * Choose, which IotLog to update.
     */
    where: IotLogWhereUniqueInput
  }


  /**
   * IotLog updateMany
   */
  export type IotLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IotLogs.
     */
    data: XOR<IotLogUpdateManyMutationInput, IotLogUncheckedUpdateManyInput>
    /**
     * Filter which IotLogs to update
     */
    where?: IotLogWhereInput
  }


  /**
   * IotLog upsert
   */
  export type IotLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotLog
     */
    select?: IotLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotLogInclude<ExtArgs> | null
    /**
     * The filter to search for the IotLog to update in case it exists.
     */
    where: IotLogWhereUniqueInput
    /**
     * In case the IotLog found by the `where` argument doesn't exist, create a new IotLog with this data.
     */
    create: XOR<IotLogCreateInput, IotLogUncheckedCreateInput>
    /**
     * In case the IotLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IotLogUpdateInput, IotLogUncheckedUpdateInput>
  }


  /**
   * IotLog delete
   */
  export type IotLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotLog
     */
    select?: IotLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotLogInclude<ExtArgs> | null
    /**
     * Filter which IotLog to delete.
     */
    where: IotLogWhereUniqueInput
  }


  /**
   * IotLog deleteMany
   */
  export type IotLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IotLogs to delete
     */
    where?: IotLogWhereInput
  }


  /**
   * IotLog without action
   */
  export type IotLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IotLog
     */
    select?: IotLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IotLogInclude<ExtArgs> | null
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


  export const IotScalarFieldEnum: {
    id: 'id',
    key: 'key',
    occupancy: 'occupancy',
    batteryLevel: 'batteryLevel',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IotScalarFieldEnum = (typeof IotScalarFieldEnum)[keyof typeof IotScalarFieldEnum]


  export const HubScalarFieldEnum: {
    id: 'id',
    key: 'key',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HubScalarFieldEnum = (typeof HubScalarFieldEnum)[keyof typeof HubScalarFieldEnum]


  export const IotLogScalarFieldEnum: {
    id: 'id',
    iotId: 'iotId',
    hubId: 'hubId',
    changeType: 'changeType',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IotLogScalarFieldEnum = (typeof IotLogScalarFieldEnum)[keyof typeof IotLogScalarFieldEnum]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CHANGE_TYPE'
   */
  export type EnumCHANGE_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CHANGE_TYPE'>
    


  /**
   * Reference to a field of type 'CHANGE_TYPE[]'
   */
  export type ListEnumCHANGE_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CHANGE_TYPE[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type IotWhereInput = {
    AND?: IotWhereInput | IotWhereInput[]
    OR?: IotWhereInput[]
    NOT?: IotWhereInput | IotWhereInput[]
    id?: StringFilter<"Iot"> | string
    key?: StringFilter<"Iot"> | string
    occupancy?: BoolFilter<"Iot"> | boolean
    batteryLevel?: IntFilter<"Iot"> | number
    createdAt?: DateTimeFilter<"Iot"> | Date | string
    updatedAt?: DateTimeFilter<"Iot"> | Date | string
    IotLog?: IotLogListRelationFilter
  }

  export type IotOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    occupancy?: SortOrder
    batteryLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    IotLog?: IotLogOrderByRelationAggregateInput
  }

  export type IotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IotWhereInput | IotWhereInput[]
    OR?: IotWhereInput[]
    NOT?: IotWhereInput | IotWhereInput[]
    key?: StringFilter<"Iot"> | string
    occupancy?: BoolFilter<"Iot"> | boolean
    batteryLevel?: IntFilter<"Iot"> | number
    createdAt?: DateTimeFilter<"Iot"> | Date | string
    updatedAt?: DateTimeFilter<"Iot"> | Date | string
    IotLog?: IotLogListRelationFilter
  }, "id">

  export type IotOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    occupancy?: SortOrder
    batteryLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IotCountOrderByAggregateInput
    _avg?: IotAvgOrderByAggregateInput
    _max?: IotMaxOrderByAggregateInput
    _min?: IotMinOrderByAggregateInput
    _sum?: IotSumOrderByAggregateInput
  }

  export type IotScalarWhereWithAggregatesInput = {
    AND?: IotScalarWhereWithAggregatesInput | IotScalarWhereWithAggregatesInput[]
    OR?: IotScalarWhereWithAggregatesInput[]
    NOT?: IotScalarWhereWithAggregatesInput | IotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Iot"> | string
    key?: StringWithAggregatesFilter<"Iot"> | string
    occupancy?: BoolWithAggregatesFilter<"Iot"> | boolean
    batteryLevel?: IntWithAggregatesFilter<"Iot"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Iot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Iot"> | Date | string
  }

  export type HubWhereInput = {
    AND?: HubWhereInput | HubWhereInput[]
    OR?: HubWhereInput[]
    NOT?: HubWhereInput | HubWhereInput[]
    id?: StringFilter<"Hub"> | string
    key?: StringFilter<"Hub"> | string
    createdAt?: DateTimeFilter<"Hub"> | Date | string
    updatedAt?: DateTimeFilter<"Hub"> | Date | string
    IotLog?: IotLogListRelationFilter
  }

  export type HubOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    IotLog?: IotLogOrderByRelationAggregateInput
  }

  export type HubWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HubWhereInput | HubWhereInput[]
    OR?: HubWhereInput[]
    NOT?: HubWhereInput | HubWhereInput[]
    key?: StringFilter<"Hub"> | string
    createdAt?: DateTimeFilter<"Hub"> | Date | string
    updatedAt?: DateTimeFilter<"Hub"> | Date | string
    IotLog?: IotLogListRelationFilter
  }, "id">

  export type HubOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HubCountOrderByAggregateInput
    _max?: HubMaxOrderByAggregateInput
    _min?: HubMinOrderByAggregateInput
  }

  export type HubScalarWhereWithAggregatesInput = {
    AND?: HubScalarWhereWithAggregatesInput | HubScalarWhereWithAggregatesInput[]
    OR?: HubScalarWhereWithAggregatesInput[]
    NOT?: HubScalarWhereWithAggregatesInput | HubScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hub"> | string
    key?: StringWithAggregatesFilter<"Hub"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Hub"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hub"> | Date | string
  }

  export type IotLogWhereInput = {
    AND?: IotLogWhereInput | IotLogWhereInput[]
    OR?: IotLogWhereInput[]
    NOT?: IotLogWhereInput | IotLogWhereInput[]
    id?: StringFilter<"IotLog"> | string
    iotId?: StringFilter<"IotLog"> | string
    hubId?: StringFilter<"IotLog"> | string
    changeType?: EnumCHANGE_TYPEFilter<"IotLog"> | $Enums.CHANGE_TYPE
    value?: StringFilter<"IotLog"> | string
    createdAt?: DateTimeFilter<"IotLog"> | Date | string
    updatedAt?: DateTimeFilter<"IotLog"> | Date | string
    iot?: XOR<IotRelationFilter, IotWhereInput>
    hub?: XOR<HubRelationFilter, HubWhereInput>
  }

  export type IotLogOrderByWithRelationInput = {
    id?: SortOrder
    iotId?: SortOrder
    hubId?: SortOrder
    changeType?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    iot?: IotOrderByWithRelationInput
    hub?: HubOrderByWithRelationInput
  }

  export type IotLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IotLogWhereInput | IotLogWhereInput[]
    OR?: IotLogWhereInput[]
    NOT?: IotLogWhereInput | IotLogWhereInput[]
    iotId?: StringFilter<"IotLog"> | string
    hubId?: StringFilter<"IotLog"> | string
    changeType?: EnumCHANGE_TYPEFilter<"IotLog"> | $Enums.CHANGE_TYPE
    value?: StringFilter<"IotLog"> | string
    createdAt?: DateTimeFilter<"IotLog"> | Date | string
    updatedAt?: DateTimeFilter<"IotLog"> | Date | string
    iot?: XOR<IotRelationFilter, IotWhereInput>
    hub?: XOR<HubRelationFilter, HubWhereInput>
  }, "id">

  export type IotLogOrderByWithAggregationInput = {
    id?: SortOrder
    iotId?: SortOrder
    hubId?: SortOrder
    changeType?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IotLogCountOrderByAggregateInput
    _max?: IotLogMaxOrderByAggregateInput
    _min?: IotLogMinOrderByAggregateInput
  }

  export type IotLogScalarWhereWithAggregatesInput = {
    AND?: IotLogScalarWhereWithAggregatesInput | IotLogScalarWhereWithAggregatesInput[]
    OR?: IotLogScalarWhereWithAggregatesInput[]
    NOT?: IotLogScalarWhereWithAggregatesInput | IotLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IotLog"> | string
    iotId?: StringWithAggregatesFilter<"IotLog"> | string
    hubId?: StringWithAggregatesFilter<"IotLog"> | string
    changeType?: EnumCHANGE_TYPEWithAggregatesFilter<"IotLog"> | $Enums.CHANGE_TYPE
    value?: StringWithAggregatesFilter<"IotLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"IotLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IotLog"> | Date | string
  }

  export type IotCreateInput = {
    id?: string
    key: string
    occupancy?: boolean
    batteryLevel?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    IotLog?: IotLogCreateNestedManyWithoutIotInput
  }

  export type IotUncheckedCreateInput = {
    id?: string
    key: string
    occupancy?: boolean
    batteryLevel?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    IotLog?: IotLogUncheckedCreateNestedManyWithoutIotInput
  }

  export type IotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    occupancy?: BoolFieldUpdateOperationsInput | boolean
    batteryLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    IotLog?: IotLogUpdateManyWithoutIotNestedInput
  }

  export type IotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    occupancy?: BoolFieldUpdateOperationsInput | boolean
    batteryLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    IotLog?: IotLogUncheckedUpdateManyWithoutIotNestedInput
  }

  export type IotCreateManyInput = {
    id?: string
    key: string
    occupancy?: boolean
    batteryLevel?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    occupancy?: BoolFieldUpdateOperationsInput | boolean
    batteryLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    occupancy?: BoolFieldUpdateOperationsInput | boolean
    batteryLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HubCreateInput = {
    id?: string
    key: string
    createdAt?: Date | string
    updatedAt?: Date | string
    IotLog?: IotLogCreateNestedManyWithoutHubInput
  }

  export type HubUncheckedCreateInput = {
    id?: string
    key: string
    createdAt?: Date | string
    updatedAt?: Date | string
    IotLog?: IotLogUncheckedCreateNestedManyWithoutHubInput
  }

  export type HubUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    IotLog?: IotLogUpdateManyWithoutHubNestedInput
  }

  export type HubUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    IotLog?: IotLogUncheckedUpdateManyWithoutHubNestedInput
  }

  export type HubCreateManyInput = {
    id?: string
    key: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HubUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HubUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IotLogCreateInput = {
    id?: string
    changeType: $Enums.CHANGE_TYPE
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    iot: IotCreateNestedOneWithoutIotLogInput
    hub: HubCreateNestedOneWithoutIotLogInput
  }

  export type IotLogUncheckedCreateInput = {
    id?: string
    iotId: string
    hubId: string
    changeType: $Enums.CHANGE_TYPE
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IotLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    changeType?: EnumCHANGE_TYPEFieldUpdateOperationsInput | $Enums.CHANGE_TYPE
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iot?: IotUpdateOneRequiredWithoutIotLogNestedInput
    hub?: HubUpdateOneRequiredWithoutIotLogNestedInput
  }

  export type IotLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    iotId?: StringFieldUpdateOperationsInput | string
    hubId?: StringFieldUpdateOperationsInput | string
    changeType?: EnumCHANGE_TYPEFieldUpdateOperationsInput | $Enums.CHANGE_TYPE
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IotLogCreateManyInput = {
    id?: string
    iotId: string
    hubId: string
    changeType: $Enums.CHANGE_TYPE
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IotLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    changeType?: EnumCHANGE_TYPEFieldUpdateOperationsInput | $Enums.CHANGE_TYPE
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IotLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    iotId?: StringFieldUpdateOperationsInput | string
    hubId?: StringFieldUpdateOperationsInput | string
    changeType?: EnumCHANGE_TYPEFieldUpdateOperationsInput | $Enums.CHANGE_TYPE
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type IotLogListRelationFilter = {
    every?: IotLogWhereInput
    some?: IotLogWhereInput
    none?: IotLogWhereInput
  }

  export type IotLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IotCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    occupancy?: SortOrder
    batteryLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IotAvgOrderByAggregateInput = {
    batteryLevel?: SortOrder
  }

  export type IotMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    occupancy?: SortOrder
    batteryLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IotMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    occupancy?: SortOrder
    batteryLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IotSumOrderByAggregateInput = {
    batteryLevel?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type HubCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HubMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HubMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCHANGE_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.CHANGE_TYPE | EnumCHANGE_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.CHANGE_TYPE[] | ListEnumCHANGE_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.CHANGE_TYPE[] | ListEnumCHANGE_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumCHANGE_TYPEFilter<$PrismaModel> | $Enums.CHANGE_TYPE
  }

  export type IotRelationFilter = {
    is?: IotWhereInput
    isNot?: IotWhereInput
  }

  export type HubRelationFilter = {
    is?: HubWhereInput
    isNot?: HubWhereInput
  }

  export type IotLogCountOrderByAggregateInput = {
    id?: SortOrder
    iotId?: SortOrder
    hubId?: SortOrder
    changeType?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IotLogMaxOrderByAggregateInput = {
    id?: SortOrder
    iotId?: SortOrder
    hubId?: SortOrder
    changeType?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IotLogMinOrderByAggregateInput = {
    id?: SortOrder
    iotId?: SortOrder
    hubId?: SortOrder
    changeType?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCHANGE_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CHANGE_TYPE | EnumCHANGE_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.CHANGE_TYPE[] | ListEnumCHANGE_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.CHANGE_TYPE[] | ListEnumCHANGE_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumCHANGE_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.CHANGE_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCHANGE_TYPEFilter<$PrismaModel>
    _max?: NestedEnumCHANGE_TYPEFilter<$PrismaModel>
  }

  export type IotLogCreateNestedManyWithoutIotInput = {
    create?: XOR<IotLogCreateWithoutIotInput, IotLogUncheckedCreateWithoutIotInput> | IotLogCreateWithoutIotInput[] | IotLogUncheckedCreateWithoutIotInput[]
    connectOrCreate?: IotLogCreateOrConnectWithoutIotInput | IotLogCreateOrConnectWithoutIotInput[]
    createMany?: IotLogCreateManyIotInputEnvelope
    connect?: IotLogWhereUniqueInput | IotLogWhereUniqueInput[]
  }

  export type IotLogUncheckedCreateNestedManyWithoutIotInput = {
    create?: XOR<IotLogCreateWithoutIotInput, IotLogUncheckedCreateWithoutIotInput> | IotLogCreateWithoutIotInput[] | IotLogUncheckedCreateWithoutIotInput[]
    connectOrCreate?: IotLogCreateOrConnectWithoutIotInput | IotLogCreateOrConnectWithoutIotInput[]
    createMany?: IotLogCreateManyIotInputEnvelope
    connect?: IotLogWhereUniqueInput | IotLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IotLogUpdateManyWithoutIotNestedInput = {
    create?: XOR<IotLogCreateWithoutIotInput, IotLogUncheckedCreateWithoutIotInput> | IotLogCreateWithoutIotInput[] | IotLogUncheckedCreateWithoutIotInput[]
    connectOrCreate?: IotLogCreateOrConnectWithoutIotInput | IotLogCreateOrConnectWithoutIotInput[]
    upsert?: IotLogUpsertWithWhereUniqueWithoutIotInput | IotLogUpsertWithWhereUniqueWithoutIotInput[]
    createMany?: IotLogCreateManyIotInputEnvelope
    set?: IotLogWhereUniqueInput | IotLogWhereUniqueInput[]
    disconnect?: IotLogWhereUniqueInput | IotLogWhereUniqueInput[]
    delete?: IotLogWhereUniqueInput | IotLogWhereUniqueInput[]
    connect?: IotLogWhereUniqueInput | IotLogWhereUniqueInput[]
    update?: IotLogUpdateWithWhereUniqueWithoutIotInput | IotLogUpdateWithWhereUniqueWithoutIotInput[]
    updateMany?: IotLogUpdateManyWithWhereWithoutIotInput | IotLogUpdateManyWithWhereWithoutIotInput[]
    deleteMany?: IotLogScalarWhereInput | IotLogScalarWhereInput[]
  }

  export type IotLogUncheckedUpdateManyWithoutIotNestedInput = {
    create?: XOR<IotLogCreateWithoutIotInput, IotLogUncheckedCreateWithoutIotInput> | IotLogCreateWithoutIotInput[] | IotLogUncheckedCreateWithoutIotInput[]
    connectOrCreate?: IotLogCreateOrConnectWithoutIotInput | IotLogCreateOrConnectWithoutIotInput[]
    upsert?: IotLogUpsertWithWhereUniqueWithoutIotInput | IotLogUpsertWithWhereUniqueWithoutIotInput[]
    createMany?: IotLogCreateManyIotInputEnvelope
    set?: IotLogWhereUniqueInput | IotLogWhereUniqueInput[]
    disconnect?: IotLogWhereUniqueInput | IotLogWhereUniqueInput[]
    delete?: IotLogWhereUniqueInput | IotLogWhereUniqueInput[]
    connect?: IotLogWhereUniqueInput | IotLogWhereUniqueInput[]
    update?: IotLogUpdateWithWhereUniqueWithoutIotInput | IotLogUpdateWithWhereUniqueWithoutIotInput[]
    updateMany?: IotLogUpdateManyWithWhereWithoutIotInput | IotLogUpdateManyWithWhereWithoutIotInput[]
    deleteMany?: IotLogScalarWhereInput | IotLogScalarWhereInput[]
  }

  export type IotLogCreateNestedManyWithoutHubInput = {
    create?: XOR<IotLogCreateWithoutHubInput, IotLogUncheckedCreateWithoutHubInput> | IotLogCreateWithoutHubInput[] | IotLogUncheckedCreateWithoutHubInput[]
    connectOrCreate?: IotLogCreateOrConnectWithoutHubInput | IotLogCreateOrConnectWithoutHubInput[]
    createMany?: IotLogCreateManyHubInputEnvelope
    connect?: IotLogWhereUniqueInput | IotLogWhereUniqueInput[]
  }

  export type IotLogUncheckedCreateNestedManyWithoutHubInput = {
    create?: XOR<IotLogCreateWithoutHubInput, IotLogUncheckedCreateWithoutHubInput> | IotLogCreateWithoutHubInput[] | IotLogUncheckedCreateWithoutHubInput[]
    connectOrCreate?: IotLogCreateOrConnectWithoutHubInput | IotLogCreateOrConnectWithoutHubInput[]
    createMany?: IotLogCreateManyHubInputEnvelope
    connect?: IotLogWhereUniqueInput | IotLogWhereUniqueInput[]
  }

  export type IotLogUpdateManyWithoutHubNestedInput = {
    create?: XOR<IotLogCreateWithoutHubInput, IotLogUncheckedCreateWithoutHubInput> | IotLogCreateWithoutHubInput[] | IotLogUncheckedCreateWithoutHubInput[]
    connectOrCreate?: IotLogCreateOrConnectWithoutHubInput | IotLogCreateOrConnectWithoutHubInput[]
    upsert?: IotLogUpsertWithWhereUniqueWithoutHubInput | IotLogUpsertWithWhereUniqueWithoutHubInput[]
    createMany?: IotLogCreateManyHubInputEnvelope
    set?: IotLogWhereUniqueInput | IotLogWhereUniqueInput[]
    disconnect?: IotLogWhereUniqueInput | IotLogWhereUniqueInput[]
    delete?: IotLogWhereUniqueInput | IotLogWhereUniqueInput[]
    connect?: IotLogWhereUniqueInput | IotLogWhereUniqueInput[]
    update?: IotLogUpdateWithWhereUniqueWithoutHubInput | IotLogUpdateWithWhereUniqueWithoutHubInput[]
    updateMany?: IotLogUpdateManyWithWhereWithoutHubInput | IotLogUpdateManyWithWhereWithoutHubInput[]
    deleteMany?: IotLogScalarWhereInput | IotLogScalarWhereInput[]
  }

  export type IotLogUncheckedUpdateManyWithoutHubNestedInput = {
    create?: XOR<IotLogCreateWithoutHubInput, IotLogUncheckedCreateWithoutHubInput> | IotLogCreateWithoutHubInput[] | IotLogUncheckedCreateWithoutHubInput[]
    connectOrCreate?: IotLogCreateOrConnectWithoutHubInput | IotLogCreateOrConnectWithoutHubInput[]
    upsert?: IotLogUpsertWithWhereUniqueWithoutHubInput | IotLogUpsertWithWhereUniqueWithoutHubInput[]
    createMany?: IotLogCreateManyHubInputEnvelope
    set?: IotLogWhereUniqueInput | IotLogWhereUniqueInput[]
    disconnect?: IotLogWhereUniqueInput | IotLogWhereUniqueInput[]
    delete?: IotLogWhereUniqueInput | IotLogWhereUniqueInput[]
    connect?: IotLogWhereUniqueInput | IotLogWhereUniqueInput[]
    update?: IotLogUpdateWithWhereUniqueWithoutHubInput | IotLogUpdateWithWhereUniqueWithoutHubInput[]
    updateMany?: IotLogUpdateManyWithWhereWithoutHubInput | IotLogUpdateManyWithWhereWithoutHubInput[]
    deleteMany?: IotLogScalarWhereInput | IotLogScalarWhereInput[]
  }

  export type IotCreateNestedOneWithoutIotLogInput = {
    create?: XOR<IotCreateWithoutIotLogInput, IotUncheckedCreateWithoutIotLogInput>
    connectOrCreate?: IotCreateOrConnectWithoutIotLogInput
    connect?: IotWhereUniqueInput
  }

  export type HubCreateNestedOneWithoutIotLogInput = {
    create?: XOR<HubCreateWithoutIotLogInput, HubUncheckedCreateWithoutIotLogInput>
    connectOrCreate?: HubCreateOrConnectWithoutIotLogInput
    connect?: HubWhereUniqueInput
  }

  export type EnumCHANGE_TYPEFieldUpdateOperationsInput = {
    set?: $Enums.CHANGE_TYPE
  }

  export type IotUpdateOneRequiredWithoutIotLogNestedInput = {
    create?: XOR<IotCreateWithoutIotLogInput, IotUncheckedCreateWithoutIotLogInput>
    connectOrCreate?: IotCreateOrConnectWithoutIotLogInput
    upsert?: IotUpsertWithoutIotLogInput
    connect?: IotWhereUniqueInput
    update?: XOR<XOR<IotUpdateToOneWithWhereWithoutIotLogInput, IotUpdateWithoutIotLogInput>, IotUncheckedUpdateWithoutIotLogInput>
  }

  export type HubUpdateOneRequiredWithoutIotLogNestedInput = {
    create?: XOR<HubCreateWithoutIotLogInput, HubUncheckedCreateWithoutIotLogInput>
    connectOrCreate?: HubCreateOrConnectWithoutIotLogInput
    upsert?: HubUpsertWithoutIotLogInput
    connect?: HubWhereUniqueInput
    update?: XOR<XOR<HubUpdateToOneWithWhereWithoutIotLogInput, HubUpdateWithoutIotLogInput>, HubUncheckedUpdateWithoutIotLogInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumCHANGE_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.CHANGE_TYPE | EnumCHANGE_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.CHANGE_TYPE[] | ListEnumCHANGE_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.CHANGE_TYPE[] | ListEnumCHANGE_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumCHANGE_TYPEFilter<$PrismaModel> | $Enums.CHANGE_TYPE
  }

  export type NestedEnumCHANGE_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CHANGE_TYPE | EnumCHANGE_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.CHANGE_TYPE[] | ListEnumCHANGE_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.CHANGE_TYPE[] | ListEnumCHANGE_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumCHANGE_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.CHANGE_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCHANGE_TYPEFilter<$PrismaModel>
    _max?: NestedEnumCHANGE_TYPEFilter<$PrismaModel>
  }

  export type IotLogCreateWithoutIotInput = {
    id?: string
    changeType: $Enums.CHANGE_TYPE
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hub: HubCreateNestedOneWithoutIotLogInput
  }

  export type IotLogUncheckedCreateWithoutIotInput = {
    id?: string
    hubId: string
    changeType: $Enums.CHANGE_TYPE
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IotLogCreateOrConnectWithoutIotInput = {
    where: IotLogWhereUniqueInput
    create: XOR<IotLogCreateWithoutIotInput, IotLogUncheckedCreateWithoutIotInput>
  }

  export type IotLogCreateManyIotInputEnvelope = {
    data: IotLogCreateManyIotInput | IotLogCreateManyIotInput[]
    skipDuplicates?: boolean
  }

  export type IotLogUpsertWithWhereUniqueWithoutIotInput = {
    where: IotLogWhereUniqueInput
    update: XOR<IotLogUpdateWithoutIotInput, IotLogUncheckedUpdateWithoutIotInput>
    create: XOR<IotLogCreateWithoutIotInput, IotLogUncheckedCreateWithoutIotInput>
  }

  export type IotLogUpdateWithWhereUniqueWithoutIotInput = {
    where: IotLogWhereUniqueInput
    data: XOR<IotLogUpdateWithoutIotInput, IotLogUncheckedUpdateWithoutIotInput>
  }

  export type IotLogUpdateManyWithWhereWithoutIotInput = {
    where: IotLogScalarWhereInput
    data: XOR<IotLogUpdateManyMutationInput, IotLogUncheckedUpdateManyWithoutIotInput>
  }

  export type IotLogScalarWhereInput = {
    AND?: IotLogScalarWhereInput | IotLogScalarWhereInput[]
    OR?: IotLogScalarWhereInput[]
    NOT?: IotLogScalarWhereInput | IotLogScalarWhereInput[]
    id?: StringFilter<"IotLog"> | string
    iotId?: StringFilter<"IotLog"> | string
    hubId?: StringFilter<"IotLog"> | string
    changeType?: EnumCHANGE_TYPEFilter<"IotLog"> | $Enums.CHANGE_TYPE
    value?: StringFilter<"IotLog"> | string
    createdAt?: DateTimeFilter<"IotLog"> | Date | string
    updatedAt?: DateTimeFilter<"IotLog"> | Date | string
  }

  export type IotLogCreateWithoutHubInput = {
    id?: string
    changeType: $Enums.CHANGE_TYPE
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    iot: IotCreateNestedOneWithoutIotLogInput
  }

  export type IotLogUncheckedCreateWithoutHubInput = {
    id?: string
    iotId: string
    changeType: $Enums.CHANGE_TYPE
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IotLogCreateOrConnectWithoutHubInput = {
    where: IotLogWhereUniqueInput
    create: XOR<IotLogCreateWithoutHubInput, IotLogUncheckedCreateWithoutHubInput>
  }

  export type IotLogCreateManyHubInputEnvelope = {
    data: IotLogCreateManyHubInput | IotLogCreateManyHubInput[]
    skipDuplicates?: boolean
  }

  export type IotLogUpsertWithWhereUniqueWithoutHubInput = {
    where: IotLogWhereUniqueInput
    update: XOR<IotLogUpdateWithoutHubInput, IotLogUncheckedUpdateWithoutHubInput>
    create: XOR<IotLogCreateWithoutHubInput, IotLogUncheckedCreateWithoutHubInput>
  }

  export type IotLogUpdateWithWhereUniqueWithoutHubInput = {
    where: IotLogWhereUniqueInput
    data: XOR<IotLogUpdateWithoutHubInput, IotLogUncheckedUpdateWithoutHubInput>
  }

  export type IotLogUpdateManyWithWhereWithoutHubInput = {
    where: IotLogScalarWhereInput
    data: XOR<IotLogUpdateManyMutationInput, IotLogUncheckedUpdateManyWithoutHubInput>
  }

  export type IotCreateWithoutIotLogInput = {
    id?: string
    key: string
    occupancy?: boolean
    batteryLevel?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IotUncheckedCreateWithoutIotLogInput = {
    id?: string
    key: string
    occupancy?: boolean
    batteryLevel?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IotCreateOrConnectWithoutIotLogInput = {
    where: IotWhereUniqueInput
    create: XOR<IotCreateWithoutIotLogInput, IotUncheckedCreateWithoutIotLogInput>
  }

  export type HubCreateWithoutIotLogInput = {
    id?: string
    key: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HubUncheckedCreateWithoutIotLogInput = {
    id?: string
    key: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HubCreateOrConnectWithoutIotLogInput = {
    where: HubWhereUniqueInput
    create: XOR<HubCreateWithoutIotLogInput, HubUncheckedCreateWithoutIotLogInput>
  }

  export type IotUpsertWithoutIotLogInput = {
    update: XOR<IotUpdateWithoutIotLogInput, IotUncheckedUpdateWithoutIotLogInput>
    create: XOR<IotCreateWithoutIotLogInput, IotUncheckedCreateWithoutIotLogInput>
    where?: IotWhereInput
  }

  export type IotUpdateToOneWithWhereWithoutIotLogInput = {
    where?: IotWhereInput
    data: XOR<IotUpdateWithoutIotLogInput, IotUncheckedUpdateWithoutIotLogInput>
  }

  export type IotUpdateWithoutIotLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    occupancy?: BoolFieldUpdateOperationsInput | boolean
    batteryLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IotUncheckedUpdateWithoutIotLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    occupancy?: BoolFieldUpdateOperationsInput | boolean
    batteryLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HubUpsertWithoutIotLogInput = {
    update: XOR<HubUpdateWithoutIotLogInput, HubUncheckedUpdateWithoutIotLogInput>
    create: XOR<HubCreateWithoutIotLogInput, HubUncheckedCreateWithoutIotLogInput>
    where?: HubWhereInput
  }

  export type HubUpdateToOneWithWhereWithoutIotLogInput = {
    where?: HubWhereInput
    data: XOR<HubUpdateWithoutIotLogInput, HubUncheckedUpdateWithoutIotLogInput>
  }

  export type HubUpdateWithoutIotLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HubUncheckedUpdateWithoutIotLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IotLogCreateManyIotInput = {
    id?: string
    hubId: string
    changeType: $Enums.CHANGE_TYPE
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IotLogUpdateWithoutIotInput = {
    id?: StringFieldUpdateOperationsInput | string
    changeType?: EnumCHANGE_TYPEFieldUpdateOperationsInput | $Enums.CHANGE_TYPE
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hub?: HubUpdateOneRequiredWithoutIotLogNestedInput
  }

  export type IotLogUncheckedUpdateWithoutIotInput = {
    id?: StringFieldUpdateOperationsInput | string
    hubId?: StringFieldUpdateOperationsInput | string
    changeType?: EnumCHANGE_TYPEFieldUpdateOperationsInput | $Enums.CHANGE_TYPE
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IotLogUncheckedUpdateManyWithoutIotInput = {
    id?: StringFieldUpdateOperationsInput | string
    hubId?: StringFieldUpdateOperationsInput | string
    changeType?: EnumCHANGE_TYPEFieldUpdateOperationsInput | $Enums.CHANGE_TYPE
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IotLogCreateManyHubInput = {
    id?: string
    iotId: string
    changeType: $Enums.CHANGE_TYPE
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IotLogUpdateWithoutHubInput = {
    id?: StringFieldUpdateOperationsInput | string
    changeType?: EnumCHANGE_TYPEFieldUpdateOperationsInput | $Enums.CHANGE_TYPE
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iot?: IotUpdateOneRequiredWithoutIotLogNestedInput
  }

  export type IotLogUncheckedUpdateWithoutHubInput = {
    id?: StringFieldUpdateOperationsInput | string
    iotId?: StringFieldUpdateOperationsInput | string
    changeType?: EnumCHANGE_TYPEFieldUpdateOperationsInput | $Enums.CHANGE_TYPE
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IotLogUncheckedUpdateManyWithoutHubInput = {
    id?: StringFieldUpdateOperationsInput | string
    iotId?: StringFieldUpdateOperationsInput | string
    changeType?: EnumCHANGE_TYPEFieldUpdateOperationsInput | $Enums.CHANGE_TYPE
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use IotCountOutputTypeDefaultArgs instead
     */
    export type IotCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IotCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HubCountOutputTypeDefaultArgs instead
     */
    export type HubCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HubCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IotDefaultArgs instead
     */
    export type IotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HubDefaultArgs instead
     */
    export type HubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HubDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IotLogDefaultArgs instead
     */
    export type IotLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IotLogDefaultArgs<ExtArgs>

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