//Create me a physics solver
var result = ""
var process = require("process")
class Kecepatan {
    static KecepatanRataRata(perpindahan, waktu) {
       result = `(v) = (t)/(s)\nv = ${perpindahan / waktu}m/s`
         return result
    }

}

class Gaya {
 static GayaBerat(massa, gravitasi) {
    result = `(F) = (m*g)\nF = ${massa * gravitasi}N`
    return result
 }
 static GayaGravitasi(GravitasiKonstan, MassaObjek1, MassaObjek2, Jarak) {
    result = `(Fgrav) = (G*m1*m2)/(d^2)\nFgrav = ${GravitasiKonstan * MassaObjek1 * MassaObjek2}/(${Jarak}^2)\nFgrav = ${GravitasiKonstan * MassaObjek1 * MassaObjek2 / (Jarak * Jarak)}N`
 }
}
class Tekanan {
    static TekananPadat(GayaTekan, LuasPermukaan) {
        result = `(T) = (F)/(A)\nT = ${GayaTekan / LuasPermukaan}N/m^2`
        return result
    }
    static TekananHidrostatik1(MassaJenis, PercepatanGravitasi, KedalamanZatAir){
        result = `Ph = p.g.h\nPh = ${MassaJenis * PercepatanGravitasi * KedalamanZatAir}N`
    }
    static TekananHidrostatik2(KedalamanZatAir, BeratJenis)
    {
        result = `Ph = S.h\nPh = ${BeratJenis * KedalamanZatAir}N`
        return result;
    }
    static HukumPascal(GayaTekanan1, GayaTekanan2, LuasTekanan1, LuasTekanan2) {
        result = `P = F1.A1 + F2.A2\nP = ${GayaTekanan1 * LuasTekanan1}N/m^2 + ${GayaTekanan2 * LuasTekanan2}N/m^2\nP = ${GayaTekanan1 * LuasTekanan1 + GayaTekanan2 * LuasTekanan2}N/`
        return result
    }
    static HukumArchimedes1(VolumeBenda, BeratJenis) {
        result = `Fa = Vb.S\nFa = ${VolumeBenda * BeratJenis}N`
    }
    static HukumArchimedes2(VolumeBenda, MassaJenis, Gravitasi)
    {
        result = `Fa = Vb.m.g\nFa = ${VolumeBenda * MassaJenis * Gravitasi}N`
        return result;
    }
}
class Gelombang {
    static RambatGelombang(WaktuMerambat, GelombangYangMuncul, TotalJarak) {
        result = `f = n/t\nf = ${GelombangYangMuncul}/${WaktuMerambat}\nf = ${GelombangYangMuncul / WaktuMerambat}Hz\n\nV = Lambda.f\nV = ${TotalJarak}.${GelombangYangMuncul / WaktuMerambat}\nV = ${TotalJarak * (GelombangYangMuncul / WaktuMerambat)}m/ s`
        return result
    }
    static KecepatanGelombang(WaktuMerambat, GelombangYangMuncul, TotalJarak) {
        result = `V = Lambda.f\nV = ${TotalJarak}.${GelombangYangMuncul / WaktuMerambat}\nV = ${TotalJarak * (GelombangYangMuncul / WaktuMerambat)}m/ s`
        return result
    }
    static amplitudoGelombang(WaktuMerambat, GelombangYangMuncul, TotalJarak) {
        result = `A = V.t\nA = ${TotalJarak * (GelombangYangMuncul / WaktuMerambat)}.${WaktuMerambat}\nA = ${TotalJarak * (GelombangYangMuncul / WaktuMerambat) * WaktuMerambat}m/ s`
        return result
    }



}
class Energi {
    static EnergiKinetik(massa, kecepatan) {
        result = `E = m.v²\nE = ${massa}.${kecepatan}²\nE = ${massa * kecepatan * kecepatan}J`
        return result
    }
    static EnergiPotensial(massa, kecepatan, tinggi) {
        result = `E = m.g.h\nE = ${massa}.${tinggi}.${kecepatan}g\nE = ${massa * tinggi * kecepatan}J`
        return result
    }
    static EnergiElektrik(massa, kecepatan, tinggi) {
        result = `E = m.v.t\nE = ${massa}.${kecepatan}.${tinggi}\nE = ${massa * kecepatan * tinggi}J`
        return result
    }


}
class Waktu {
    static WaktuBerjalan(Kecepatan, Jarak) {
        result = `t = s/v\nt = ${Jarak}/${Kecepatan}\nt = ${Jarak / Kecepatan}s`
        return result
    }
    
}

class Lainnya {
    static CentimeterToMeter(centimeter) {
        result = `${centimeter}cm = ${centimeter / 100}m`
        return result
    }
    static MeterToCentimeter(meter) {
        result = `${meter}m = ${meter * 100}cm`
        return result
    }
    static KilometerToMeter(kilometer) {
        result = `${kilometer}km = ${kilometer * 1000}m`
        return result
    }
    static KilometerToCentimeter(kilometer) {
        result = `${kilometer}km = ${kilometer * 100000}cm`
        return result
    }
}
module.exports = {
    Kecepatan : Kecepatan,
    Gelombang : Gelombang,
    Energi : Energi,
    Waktu : Waktu,
    Tekanan : Tekanan,
    Gaya : Gaya,
    Lainnya : Lainnya
};
