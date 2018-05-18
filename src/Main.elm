import Html exposing ( Html, div, text )
import Html.Attributes exposing ( class )
import Time exposing ( Time, second, millisecond, every )
import Global_CSS exposing ( flex, justify_center )

main : Program Never Model Msg
main =
  Html.program 
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }

type alias Model =
  { greeting: String
  , counter : Int
  }

model : Model
model =
  { greeting = "Hello World!"
  , counter = 0
  }

type Msg =
  ChangeGreeting

init : ( Model, Cmd Msg )
init = 
  ( model, Cmd.none )

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    ChangeGreeting ->
      if model.counter < 3 then
        case model.counter of
          0 ->
            ({ model | counter = model.counter + 1, greeting = "Hello World!" }, Cmd.none )
          1 ->
            ({ model | counter = model.counter + 1, greeting = "Welcome In!" }, Cmd.none )
          2 ->
            ({ model | counter = model.counter + 1, greeting = "How's it Hangin'?" }, Cmd.none )
          _ ->
            ({ model | counter = model.counter + 1, greeting = "Hello World!" }, Cmd.none )
      else
        ({ model | counter = 0, greeting = "What a great day!" }, Cmd.none )

subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch [ every second changeLoop ]

view : Model -> Html Msg
view model =
  div []
    [ div [ class "headerDiv" ] [] 
    , div [ flex, justify_center ] [ text model.greeting ]
    ]

changeLoop : Time -> Msg
changeLoop time =
  ChangeGreeting