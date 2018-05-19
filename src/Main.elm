import Html exposing ( Html, div, text )
import Html.Attributes exposing ( class, style )
import Time exposing ( Time, second, millisecond, every, now, inMilliseconds )
import Global_CSS exposing ( flex, justify_center )
import Random exposing ( .. )
import Task exposing (Task)

main : Program Never Model Msg
main =
  Html.program 
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }

type Sign = Positive | Negative

type alias Background =
  { r: { value: Int, direction: Sign}
  , g: { value: Int, direction: Sign}
  , b: { value: Int, direction: Sign}
  }

colorRange = Random.int 0 255

background : Background
background =
  let 
    randomR = step (Random.int 0 100) (Random.initialSeed 16)
    randomG = step (Random.int 0 175) (Random.initialSeed 12)
    randomB = step colorRange (Random.initialSeed 11)
    rBool = Tuple.first (step Random.bool (Random.initialSeed 15))
    gBool = Tuple.first (step Random.bool (Random.initialSeed 1))
    bBool = Tuple.first (step Random.bool (Random.initialSeed 10))
  in
    { r = { value = Tuple.first randomR
          , direction =
              if rBool then Positive else Negative
          }
    , g = { value = Tuple.first randomG
          , direction =
              if gBool then Positive else Negative
          }
    , b = { value = Tuple.first randomB
          , direction =
              if bBool then Positive else Negative
          }
    }

type alias Model =
  { greeting: String
  , counter : Int
  , background : Background
  , currentTime : Time
  }

model : Model
model =
  { greeting = "Hello World!"
  , counter = 0
  , background = background
  , currentTime = 0
  }

type Msg =
  ChangeBackground
  | UpdateTime Time

init : ( Model, Cmd Msg )
init = 
  ( model, Cmd.none )

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    ChangeBackground ->
      (backgroundModelChange model, Cmd.none)
    UpdateTime time ->
      ({ model | currentTime = time }, Cmd.none)

subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch [ every (160 * millisecond) backgroundShift
              , every (160 * millisecond) timeTicker
              ]

view : Model -> Html Msg
view model =
  div [ getRGB model, class "mainBody" ]
    [ div [ class "headerDiv" ] [] 
    , div [ flex, justify_center ] 
        [ div [ class "rgbCounter" ]
            [ text ("rgb(" 
              ++ toString model.background.r.value ++ ","
              ++ toString model.background.g.value ++ ","
              ++ toString model.background.b.value ++ ")")
            ]
        , div [ class "rgbCounter" ]
            [ text ( toString ( inMilliseconds model.currentTime ) ) ]
        ]
    ]

backgroundShift : Time -> Msg
backgroundShift time =
  ChangeBackground

backgroundModelChange : Model -> Model
backgroundModelChange model =
  let
    rDirection =
      if model.background.r.value + 10 >= 120 then Negative
        else if model.background.r.value - 5 < 0 then Positive
        else model.background.r.direction
    gDirection = 
      if model.background.g.value + 10 >= 175 then Negative
        else if model.background.g.value - 8 < 0 then Positive
        else model.background.g.direction
    bDirection =
      if model.background.b.value + 10 >= 255 then Negative
        else if model.background.b.value - 16 < 0 then Positive
        else model.background.b.direction 
  
  in
    { model |
        background = { background |
            r = { value =
                    case rDirection of
                      Positive ->
                        model.background.r.value + 3
                      Negative ->
                        model.background.r.value - 3
                , direction = rDirection
                }
            ,g = { value =
                      case gDirection of
                        Positive ->
                          model.background.g.value + 8
                        Negative ->
                          model.background.g.value - 8
                  , direction = gDirection
                  }
            ,b = { value =
                      case bDirection of
                        Positive ->
                          model.background.b.value + 16
                        Negative ->
                          model.background.b.value - 16
                  , direction = bDirection
                  }
            }
    }
    

getRGB : Model -> Html.Attribute msg
getRGB model =
  style 
    [ ("background"
      , "rgb(" 
          ++ toString model.background.r.value ++ ","
          ++ toString model.background.g.value ++ ","
          ++ toString model.background.b.value ++ ")"
      )
    ]

updateTime : Time -> Msg
updateTime time =
  UpdateTime time

timeTicker : Time -> Msg
timeTicker time =
  (Task.perform updateTime now)