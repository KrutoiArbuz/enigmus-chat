import uvicorn
import uuid
from fastapi import FastAPI, Body
from fastapi.responses import FileResponse

from fastapi.staticfiles import StaticFiles
from GradeScript import enigma

# ЗАМЕНИТЬ НА БД \/, ДОБАВИТЬ УДАЛЕНИЕ ПО ВРЕМЕНИ
class Message:
    def __init__(self, id, message, settings):
        self.id = id
        self.message = message
        self.settings = settings
messages = []




app = FastAPI()

app.mount("/static", StaticFiles(directory="public/static"), name="static")


@app.get("/")
async def main():
    return FileResponse("public/index.html")

@app.get("/id")
async def id():
    return str(uuid.uuid4())

# УДАЛЯТЬ НЕ ТЕКСТ \/

@app.post("/ms")
async def send_message(data=Body()):
    settings = data["settings"]
    message = data["message"]
    try:
        id =  data["id"]
    except:
        id=""

    if message is None or message=="":
        if settings=="" or settings is None:
            buf = []
            for i in messages:
                if i.id == id:
                    buf.append([enigma(i.message, "I~I~I~A~A~A~UKWB"), 1])
                else:
                    buf.append([enigma(i.message, "I~I~I~A~A~A~UKWB"), 0])
            return buf
        else:
            buf = []
            for i in messages:
                if i.id == id:
                    buf.append([enigma(i.message, settings), 1])
                else:
                    buf.append([enigma(i.message, settings), 0])
            return buf

    else:
        final_message = enigma(message, settings)
        messages.append(Message(id, final_message, settings))



    buf=[]
    for i in messages:
        if i.id==id:
            buf.append([enigma(i.message,settings),1])
        else:
            buf.append([enigma(i.message, settings), 0])
    return buf

if __name__ == "__main__":
    uvicorn.run(app, host="127.127.127.127", port=8000)