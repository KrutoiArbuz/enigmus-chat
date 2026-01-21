# ИСХОДНЫЕ ДАННЫЕ
alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


reflectorB = "YRUHQSLDPXNGOKMIEBFZCWVJAT"
reflectorC = "FVPJIAOYEDRZXWGCTKUQSBNMHL"
reflectors = {"UKWB": reflectorB,"UKWC": reflectorC}

Rotor_I = ["EKMFLGDQVZNTOWYHXUSPAIBRCJ", "R"]
Rotor_II = ["AJDKSIRUXBLHWTMCQGZNPYFVOE", "F"]
Rotor_III = ["BDFHJLCPRTXVZNYEIWGAKMUSQO", "W"]
Rotor_IV = ["ESOVPZJAYQUIRHXLNFTGKDCMWB", "K"]
Rotor_V = ["VZBRGITYUPSDNHLXAWMJQOFECK", "A"]


Rotors = {"I": Rotor_I, "II": Rotor_II,"III": Rotor_III, "IV": Rotor_IV,"V": Rotor_V}


# СКРИПТ
def mod(n):
    return n - (n // 26) * 26


# # ФУНКЦИЯ ДЛЯ ИМПОРТА
# def enigma(message, get_settings):
#     global alpha,reflectors,Rotors
#
#     settings = get_settings.split("~")
#     rotor1, step1 = Rotors[settings[0]]
#     rotor2, step2 = Rotors[settings[1]]
#     rotor3, step3 = Rotors[settings[2]]
#     code1 = settings[3]
#     code2 = settings[4]
#     code3 = settings[5]
#     reflector = reflectors[settings[6]]
#     stroka = message.upper()
#     itog = ""
#     int_code1 = alpha.index(code1)
#     int_code2 = alpha.index(code2)
#     int_code3 = alpha.index(code3)
#     for buk in stroka:
#         if buk in alpha:
#             int_buk = alpha.index(buk)
#             int_code3 = mod(int_code3 + 1)
#             if alpha[int_code3] == step3 or alpha[mod(int_code2 + 1)] == step2:
#                 int_code2 = mod(int_code2 + 1)
#                 if alpha[int_code2] == step2:
#                     int_code1 = mod(int_code1 + 1)
#             int_itog = mod(int_buk + int_code3)
#             int_itog = mod(alpha.index(rotor3[int_itog]) + (int_code2 - int_code3))
#             int_itog = mod(alpha.index(rotor2[int_itog]) + (int_code1 - int_code2))
#             int_itog = mod(alpha.index(rotor1[int_itog]) - int_code1)
#             int_itog = mod(reflector.index(alpha[int_itog]) + int_code1)
#             int_itog = mod(rotor1.index(alpha[int_itog]) - (int_code1 - int_code2))
#             int_itog = mod(rotor2.index(alpha[int_itog]) - (int_code2 - int_code3))
#             int_itog = mod(rotor3.index(alpha[int_itog]) - int_code3)
#             itog += alpha[int_itog]
#         else:
#             itog += buk
#     return itog
#



# НАСТРОЙКА

rotor1,step1=Rotors["III"]
rotor2,step2=Rotors["III"]
rotor3,step3=Rotors["III"]
code1="Z"
code2="Z"
code3="Z"
reflector=reflectors["UKWB"]

stroka="wedrftgyhjtrewasdfg".upper()
itog=""

int_code1=alpha.index(code1)
int_code2=alpha.index(code2)
int_code3=alpha.index(code3)



for buk in stroka:

    if buk in alpha:
        int_buk=alpha.index(buk)

        # ПЕРЕХОД РОТОРОВ, ЧТОБЫ КРУТИЛИСЬ
        int_code3 = mod(int_code3 + 1)

        if alpha[int_code3]==step3 or alpha[mod(int_code2+1)]==step2:
            int_code2=mod(int_code2+1)

            if alpha[int_code2]==step2:
                int_code1=mod(int_code1+1)


        int_itog=mod(int_buk+int_code3)
        int_itog=mod(alpha.index(rotor3[int_itog])+(int_code2-int_code3))

        int_itog=mod(alpha.index(rotor2[int_itog])+(int_code1-int_code2))

        int_itog=mod(alpha.index(rotor1[int_itog])-int_code1)


        int_itog=mod(reflector.index(alpha[int_itog])+int_code1)


        int_itog=mod(rotor1.index(alpha[int_itog])-(int_code1-int_code2))

        int_itog=mod(rotor2.index(alpha[int_itog])-(int_code2-int_code3))

        int_itog=mod(rotor3.index(alpha[int_itog])-int_code3)

        itog+=alpha[int_itog]

    else:
        itog+=buk


# ВЫВОД ДАННЫХ
print(itog)
