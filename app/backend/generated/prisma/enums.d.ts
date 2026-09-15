export declare const UserRole: {
    readonly admin_bank: "admin_bank";
    readonly nasabah: "nasabah";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const JenisSampah: {
    readonly plastik: "plastik";
    readonly kertas: "kertas";
    readonly logam: "logam";
    readonly kaca: "kaca";
};
export type JenisSampah = (typeof JenisSampah)[keyof typeof JenisSampah];
export declare const StatusSetor: {
    readonly belum_dikonfirmasi: "belum_dikonfirmasi";
    readonly diproses: "diproses";
    readonly selesai: "selesai";
    readonly ditolak: "ditolak";
};
export type StatusSetor = (typeof StatusSetor)[keyof typeof StatusSetor];
export declare const StatusPenukaran: {
    readonly diproses: "diproses";
    readonly selesai: "selesai";
};
export type StatusPenukaran = (typeof StatusPenukaran)[keyof typeof StatusPenukaran];
