import {Component, OnInit} from '@angular/core';
import {GameService} from "../../shared/game.service";
import {ProfileService} from "../../shared/profile.service";
import * as SockJS from "sockjs-client";
import {AppComponent} from "../../app.component";
import * as Stomp from "stompjs";
import {LeiterliService} from "./leiterli.service";
import {LeiterliGame} from "../../shared/model/leiterli-dtos";

@Component({
  selector: 'leiterli',
  templateUrl: './leiterli.component.html',
  styleUrls: ['./leiterli.component.scss']
})
export class LeiterliComponent implements OnInit {

  private stompClient;
  public leiterliGame: LeiterliGame;

  constructor(private gameService: GameService,
              private leiterliService: LeiterliService,
              private profileService: ProfileService) { }

  ngOnInit() {
    this.initializeWebSocketConnection();
    this.getLeiterliGame();
  }

  initializeWebSocketConnection(){
    let ws = new SockJS(AppComponent.getSocketUrl());
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe("/game", (message: Stomp.Message) => {
        const messageBody = message.body;
        if (messageBody.startsWith(that.getGameName())) {
          that.handleMessage(message.body);
        }
      });
    });
  }

  private getGameName(): string {
    const game = this.gameService.currentGame;
    if (game == null) {
      return "not found";
    } else {
      return game.name;
    }
  }

  private handleMessage(message: string) {
    this.getLeiterliGame();
  }

  private getLeiterliGame() {
    this.leiterliService.getGame(this.getGameName()).subscribe( (game: LeiterliGame) => {
        this.leiterliGame = game;
        console.log("Game: ", this.leiterliGame);
      }
    )
  }

}