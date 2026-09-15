import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
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
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly AdminBank: "AdminBank";
    readonly Nasabah: "Nasabah";
    readonly KategoriSampah: "KategoriSampah";
    readonly SetorSampah: "SetorSampah";
    readonly DetailSetor: "DetailSetor";
    readonly Hadiah: "Hadiah";
    readonly PenukaranPoin: "PenukaranPoin";
    readonly Tenant: "Tenant";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "adminBank" | "nasabah" | "kategoriSampah" | "setorSampah" | "detailSetor" | "hadiah" | "penukaranPoin" | "tenant";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        AdminBank: {
            payload: Prisma.$AdminBankPayload<ExtArgs>;
            fields: Prisma.AdminBankFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdminBankFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminBankPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdminBankFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminBankPayload>;
                };
                findFirst: {
                    args: Prisma.AdminBankFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminBankPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdminBankFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminBankPayload>;
                };
                findMany: {
                    args: Prisma.AdminBankFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminBankPayload>[];
                };
                create: {
                    args: Prisma.AdminBankCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminBankPayload>;
                };
                createMany: {
                    args: Prisma.AdminBankCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AdminBankCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminBankPayload>[];
                };
                delete: {
                    args: Prisma.AdminBankDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminBankPayload>;
                };
                update: {
                    args: Prisma.AdminBankUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminBankPayload>;
                };
                deleteMany: {
                    args: Prisma.AdminBankDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdminBankUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AdminBankUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminBankPayload>[];
                };
                upsert: {
                    args: Prisma.AdminBankUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminBankPayload>;
                };
                aggregate: {
                    args: Prisma.AdminBankAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdminBank>;
                };
                groupBy: {
                    args: Prisma.AdminBankGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminBankGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdminBankCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminBankCountAggregateOutputType> | number;
                };
            };
        };
        Nasabah: {
            payload: Prisma.$NasabahPayload<ExtArgs>;
            fields: Prisma.NasabahFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NasabahFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NasabahPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NasabahFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NasabahPayload>;
                };
                findFirst: {
                    args: Prisma.NasabahFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NasabahPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NasabahFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NasabahPayload>;
                };
                findMany: {
                    args: Prisma.NasabahFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NasabahPayload>[];
                };
                create: {
                    args: Prisma.NasabahCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NasabahPayload>;
                };
                createMany: {
                    args: Prisma.NasabahCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NasabahCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NasabahPayload>[];
                };
                delete: {
                    args: Prisma.NasabahDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NasabahPayload>;
                };
                update: {
                    args: Prisma.NasabahUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NasabahPayload>;
                };
                deleteMany: {
                    args: Prisma.NasabahDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NasabahUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NasabahUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NasabahPayload>[];
                };
                upsert: {
                    args: Prisma.NasabahUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NasabahPayload>;
                };
                aggregate: {
                    args: Prisma.NasabahAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNasabah>;
                };
                groupBy: {
                    args: Prisma.NasabahGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NasabahGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NasabahCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NasabahCountAggregateOutputType> | number;
                };
            };
        };
        KategoriSampah: {
            payload: Prisma.$KategoriSampahPayload<ExtArgs>;
            fields: Prisma.KategoriSampahFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.KategoriSampahFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KategoriSampahPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.KategoriSampahFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KategoriSampahPayload>;
                };
                findFirst: {
                    args: Prisma.KategoriSampahFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KategoriSampahPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.KategoriSampahFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KategoriSampahPayload>;
                };
                findMany: {
                    args: Prisma.KategoriSampahFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KategoriSampahPayload>[];
                };
                create: {
                    args: Prisma.KategoriSampahCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KategoriSampahPayload>;
                };
                createMany: {
                    args: Prisma.KategoriSampahCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.KategoriSampahCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KategoriSampahPayload>[];
                };
                delete: {
                    args: Prisma.KategoriSampahDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KategoriSampahPayload>;
                };
                update: {
                    args: Prisma.KategoriSampahUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KategoriSampahPayload>;
                };
                deleteMany: {
                    args: Prisma.KategoriSampahDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.KategoriSampahUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.KategoriSampahUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KategoriSampahPayload>[];
                };
                upsert: {
                    args: Prisma.KategoriSampahUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KategoriSampahPayload>;
                };
                aggregate: {
                    args: Prisma.KategoriSampahAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateKategoriSampah>;
                };
                groupBy: {
                    args: Prisma.KategoriSampahGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KategoriSampahGroupByOutputType>[];
                };
                count: {
                    args: Prisma.KategoriSampahCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KategoriSampahCountAggregateOutputType> | number;
                };
            };
        };
        SetorSampah: {
            payload: Prisma.$SetorSampahPayload<ExtArgs>;
            fields: Prisma.SetorSampahFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SetorSampahFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetorSampahPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SetorSampahFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetorSampahPayload>;
                };
                findFirst: {
                    args: Prisma.SetorSampahFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetorSampahPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SetorSampahFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetorSampahPayload>;
                };
                findMany: {
                    args: Prisma.SetorSampahFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetorSampahPayload>[];
                };
                create: {
                    args: Prisma.SetorSampahCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetorSampahPayload>;
                };
                createMany: {
                    args: Prisma.SetorSampahCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SetorSampahCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetorSampahPayload>[];
                };
                delete: {
                    args: Prisma.SetorSampahDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetorSampahPayload>;
                };
                update: {
                    args: Prisma.SetorSampahUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetorSampahPayload>;
                };
                deleteMany: {
                    args: Prisma.SetorSampahDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SetorSampahUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SetorSampahUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetorSampahPayload>[];
                };
                upsert: {
                    args: Prisma.SetorSampahUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetorSampahPayload>;
                };
                aggregate: {
                    args: Prisma.SetorSampahAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSetorSampah>;
                };
                groupBy: {
                    args: Prisma.SetorSampahGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SetorSampahGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SetorSampahCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SetorSampahCountAggregateOutputType> | number;
                };
            };
        };
        DetailSetor: {
            payload: Prisma.$DetailSetorPayload<ExtArgs>;
            fields: Prisma.DetailSetorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DetailSetorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetailSetorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DetailSetorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetailSetorPayload>;
                };
                findFirst: {
                    args: Prisma.DetailSetorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetailSetorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DetailSetorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetailSetorPayload>;
                };
                findMany: {
                    args: Prisma.DetailSetorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetailSetorPayload>[];
                };
                create: {
                    args: Prisma.DetailSetorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetailSetorPayload>;
                };
                createMany: {
                    args: Prisma.DetailSetorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DetailSetorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetailSetorPayload>[];
                };
                delete: {
                    args: Prisma.DetailSetorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetailSetorPayload>;
                };
                update: {
                    args: Prisma.DetailSetorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetailSetorPayload>;
                };
                deleteMany: {
                    args: Prisma.DetailSetorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DetailSetorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DetailSetorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetailSetorPayload>[];
                };
                upsert: {
                    args: Prisma.DetailSetorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetailSetorPayload>;
                };
                aggregate: {
                    args: Prisma.DetailSetorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDetailSetor>;
                };
                groupBy: {
                    args: Prisma.DetailSetorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DetailSetorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DetailSetorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DetailSetorCountAggregateOutputType> | number;
                };
            };
        };
        Hadiah: {
            payload: Prisma.$HadiahPayload<ExtArgs>;
            fields: Prisma.HadiahFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.HadiahFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HadiahPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.HadiahFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HadiahPayload>;
                };
                findFirst: {
                    args: Prisma.HadiahFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HadiahPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.HadiahFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HadiahPayload>;
                };
                findMany: {
                    args: Prisma.HadiahFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HadiahPayload>[];
                };
                create: {
                    args: Prisma.HadiahCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HadiahPayload>;
                };
                createMany: {
                    args: Prisma.HadiahCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.HadiahCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HadiahPayload>[];
                };
                delete: {
                    args: Prisma.HadiahDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HadiahPayload>;
                };
                update: {
                    args: Prisma.HadiahUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HadiahPayload>;
                };
                deleteMany: {
                    args: Prisma.HadiahDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.HadiahUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.HadiahUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HadiahPayload>[];
                };
                upsert: {
                    args: Prisma.HadiahUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HadiahPayload>;
                };
                aggregate: {
                    args: Prisma.HadiahAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHadiah>;
                };
                groupBy: {
                    args: Prisma.HadiahGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HadiahGroupByOutputType>[];
                };
                count: {
                    args: Prisma.HadiahCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HadiahCountAggregateOutputType> | number;
                };
            };
        };
        PenukaranPoin: {
            payload: Prisma.$PenukaranPoinPayload<ExtArgs>;
            fields: Prisma.PenukaranPoinFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PenukaranPoinFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenukaranPoinPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PenukaranPoinFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenukaranPoinPayload>;
                };
                findFirst: {
                    args: Prisma.PenukaranPoinFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenukaranPoinPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PenukaranPoinFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenukaranPoinPayload>;
                };
                findMany: {
                    args: Prisma.PenukaranPoinFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenukaranPoinPayload>[];
                };
                create: {
                    args: Prisma.PenukaranPoinCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenukaranPoinPayload>;
                };
                createMany: {
                    args: Prisma.PenukaranPoinCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PenukaranPoinCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenukaranPoinPayload>[];
                };
                delete: {
                    args: Prisma.PenukaranPoinDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenukaranPoinPayload>;
                };
                update: {
                    args: Prisma.PenukaranPoinUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenukaranPoinPayload>;
                };
                deleteMany: {
                    args: Prisma.PenukaranPoinDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PenukaranPoinUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PenukaranPoinUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenukaranPoinPayload>[];
                };
                upsert: {
                    args: Prisma.PenukaranPoinUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PenukaranPoinPayload>;
                };
                aggregate: {
                    args: Prisma.PenukaranPoinAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePenukaranPoin>;
                };
                groupBy: {
                    args: Prisma.PenukaranPoinGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PenukaranPoinGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PenukaranPoinCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PenukaranPoinCountAggregateOutputType> | number;
                };
            };
        };
        Tenant: {
            payload: Prisma.$TenantPayload<ExtArgs>;
            fields: Prisma.TenantFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TenantFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>;
                };
                findFirst: {
                    args: Prisma.TenantFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>;
                };
                findMany: {
                    args: Prisma.TenantFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>[];
                };
                create: {
                    args: Prisma.TenantCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>;
                };
                createMany: {
                    args: Prisma.TenantCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>[];
                };
                delete: {
                    args: Prisma.TenantDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>;
                };
                update: {
                    args: Prisma.TenantUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>;
                };
                deleteMany: {
                    args: Prisma.TenantDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TenantUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>[];
                };
                upsert: {
                    args: Prisma.TenantUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>;
                };
                aggregate: {
                    args: Prisma.TenantAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTenant>;
                };
                groupBy: {
                    args: Prisma.TenantGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TenantGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TenantCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TenantCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly username: "username";
    readonly password: "password";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
    readonly deletedBy: "deletedBy";
    readonly restoredAt: "restoredAt";
    readonly restoredBy: "restoredBy";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const AdminBankScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly namaUnit: "namaUnit";
    readonly namaPengelola: "namaPengelola";
    readonly telp: "telp";
    readonly idUser: "idUser";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
    readonly deletedBy: "deletedBy";
    readonly restoredAt: "restoredAt";
    readonly restoredBy: "restoredBy";
};
export type AdminBankScalarFieldEnum = (typeof AdminBankScalarFieldEnum)[keyof typeof AdminBankScalarFieldEnum];
export declare const NasabahScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly namaNasabah: "namaNasabah";
    readonly alamat: "alamat";
    readonly telp: "telp";
    readonly saldoPoin: "saldoPoin";
    readonly idUser: "idUser";
    readonly foto: "foto";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
    readonly deletedBy: "deletedBy";
    readonly restoredAt: "restoredAt";
    readonly restoredBy: "restoredBy";
};
export type NasabahScalarFieldEnum = (typeof NasabahScalarFieldEnum)[keyof typeof NasabahScalarFieldEnum];
export declare const KategoriSampahScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly namaKategori: "namaKategori";
    readonly hargaPerKg: "hargaPerKg";
    readonly poinPerKg: "poinPerKg";
    readonly jenis: "jenis";
    readonly foto: "foto";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
    readonly deletedBy: "deletedBy";
    readonly restoredAt: "restoredAt";
    readonly restoredBy: "restoredBy";
};
export type KategoriSampahScalarFieldEnum = (typeof KategoriSampahScalarFieldEnum)[keyof typeof KategoriSampahScalarFieldEnum];
export declare const SetorSampahScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly tanggal: "tanggal";
    readonly idAdmin: "idAdmin";
    readonly idNasabah: "idNasabah";
    readonly status: "status";
    readonly totalHarga: "totalHarga";
    readonly totalPoin: "totalPoin";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
    readonly deletedBy: "deletedBy";
    readonly restoredAt: "restoredAt";
    readonly restoredBy: "restoredBy";
};
export type SetorSampahScalarFieldEnum = (typeof SetorSampahScalarFieldEnum)[keyof typeof SetorSampahScalarFieldEnum];
export declare const DetailSetorScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly idSetor: "idSetor";
    readonly idKategori: "idKategori";
    readonly beratKg: "beratKg";
    readonly beratEstimasiKg: "beratEstimasiKg";
    readonly beratTerverifikasiKg: "beratTerverifikasiKg";
    readonly subtotalPoin: "subtotalPoin";
    readonly subtotalHarga: "subtotalHarga";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
    readonly deletedBy: "deletedBy";
    readonly restoredAt: "restoredAt";
    readonly restoredBy: "restoredBy";
};
export type DetailSetorScalarFieldEnum = (typeof DetailSetorScalarFieldEnum)[keyof typeof DetailSetorScalarFieldEnum];
export declare const HadiahScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly namaHadiah: "namaHadiah";
    readonly poinDibutuhkan: "poinDibutuhkan";
    readonly stok: "stok";
    readonly foto: "foto";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
    readonly deletedBy: "deletedBy";
    readonly restoredAt: "restoredAt";
    readonly restoredBy: "restoredBy";
};
export type HadiahScalarFieldEnum = (typeof HadiahScalarFieldEnum)[keyof typeof HadiahScalarFieldEnum];
export declare const PenukaranPoinScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly tanggal: "tanggal";
    readonly idSetor: "idSetor";
    readonly idNasabah: "idNasabah";
    readonly idHadiah: "idHadiah";
    readonly poinTerpakai: "poinTerpakai";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
    readonly deletedBy: "deletedBy";
    readonly restoredAt: "restoredAt";
    readonly restoredBy: "restoredBy";
};
export type PenukaranPoinScalarFieldEnum = (typeof PenukaranPoinScalarFieldEnum)[keyof typeof PenukaranPoinScalarFieldEnum];
export declare const TenantScalarFieldEnum: {
    readonly id: "id";
    readonly appKey: "appKey";
    readonly name: "name";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
    readonly deletedBy: "deletedBy";
    readonly restoredAt: "restoredAt";
    readonly restoredBy: "restoredBy";
};
export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type EnumJenisSampahFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisSampah'>;
export type ListEnumJenisSampahFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisSampah[]'>;
export type EnumStatusSetorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSetor'>;
export type ListEnumStatusSetorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSetor[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumStatusPenukaranFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPenukaran'>;
export type ListEnumStatusPenukaranFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPenukaran[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    adminBank?: Prisma.AdminBankOmit;
    nasabah?: Prisma.NasabahOmit;
    kategoriSampah?: Prisma.KategoriSampahOmit;
    setorSampah?: Prisma.SetorSampahOmit;
    detailSetor?: Prisma.DetailSetorOmit;
    hadiah?: Prisma.HadiahOmit;
    penukaranPoin?: Prisma.PenukaranPoinOmit;
    tenant?: Prisma.TenantOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
