package main

import (
	"log"
	"net/http"
	"time"

	"github.com/Unknwon/macaron"
	"github.com/gorilla/websocket"
	"github.com/macaron-contrib/jade"
)

var (
	m        = macaron.Classic()
	upgrader = websocket.Upgrader{} // use default options
)

func init() {
	m.Use(jade.Renderer())
}

func logws(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		http.Error(w, "Method not allowed", 405)
		return
	}
	c, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Print("upgrade:", err)
		return
	}
	defer c.Close()

	mt, message, err := c.ReadMessage()
	if err != nil {
		log.Println("read:", err)
		return
	}
	log.Printf("recv: %s", message)
	for {
		err = c.WriteMessage(mt, message)
		if err != nil {
			log.Println("write:", err)
			break
		}
		time.Sleep(time.Millisecond * 500)
	}
}

func homepage(r jade.Render) {
	r.HTML(200, "index", nil)
}

func main() {
	m.Get("/", homepage)
	m.Get("/ws", logws)
	m.Run()
}
