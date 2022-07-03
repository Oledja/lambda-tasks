import dotenv from "dotenv";

dotenv.config();

const MONOBANK = {
    endpoint: "https://api.monobank.ua/bank/currency"
}

const PRIVATBANK = {
    endpoint: "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11"
}

const OPENWEATHER = {
    endpoint: "https://api.openweathermap.org/data/2.5/forecast?units=metric&lang=ru&lat=48.450001&lon=34.983334&appid=970345c294ad78e9fc9d2fb368d0b1b1"
}

const TELEGRAM_BOT = {
    token: "5452967029:AAEMGGNUJaeV13nEnIbe3l35zfamvH9NGO0"
}

const config = {
    monobank: MONOBANK,
    privatbank: PRIVATBANK,
    openweather: OPENWEATHER,
    telegramBot: TELEGRAM_BOT
}

export default config;