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

background : Background
background =
  let 
    randomR = Tuple.first (step (Random.int 0 100) (Random.initialSeed 16))
    randomG = Tuple.first (step (Random.int 0 175) (Random.initialSeed 12))
    randomB = Tuple.first (step (Random.int 0 255) (Random.initialSeed 11))
    rBool = Tuple.first (step Random.bool (Random.initialSeed 15))
    gBool = Tuple.first (step Random.bool (Random.initialSeed 1))
    bBool = Tuple.first (step Random.bool (Random.initialSeed 10))
  in
    { r = { value = randomR
          , direction =
              if rBool then Positive else Negative
          }
    , g = { value = randomG
          , direction =
              if gBool then Positive else Negative
          }
    , b = { value = randomB
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
  | UpdateTime
  | SetTime Time

init : ( Model, Cmd Msg )
init = 
  ( model, Cmd.none )

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    ChangeBackground ->
      (backgroundModelChange model, Cmd.none)
    UpdateTime ->
      (model, Task.perform SetTime now)
    SetTime time ->
      ({model | currentTime = time}, Cmd.none)

subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch [ every (50 * millisecond) backgroundShift
              , every (50 * millisecond) updateTime
              ]

view : Model -> Html Msg
view model =
  div [ class "mainBody" ]
    [ div [ class "headerDiv"
          , getRGB 
              { model | background = 
                { background | 
                    r = { value = model.background.b.value
                        , direction = model.background.b.direction
                        },
                    g = { value = model.background.r.value
                        , direction = model.background.r.direction 
                        },
                    b = { value = model.background.g.value
                        , direction = model.background.g.direction
                        }
                }
              } 
          ] []
    , div [ class "headerDiv"
          , getRGB 
              { model | background = 
                { background | 
                    r = { value = model.background.g.value
                        , direction = model.background.g.direction
                        },
                    g = { value = model.background.b.value
                        , direction = model.background.b.direction 
                        },
                    b = { value = model.background.r.value
                        , direction = model.background.r.direction
                        }
                }
              } 
          ] []
    , div [ class "headerDiv", getRGB model ] []
    {-
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
    -}
    ]

backgroundShift : Time -> Msg
backgroundShift time =
  ChangeBackground

backgroundModelChange : Model -> Model
backgroundModelChange model =
  let
    rDirection =
      if model.background.r.value + 10 >= 255 then Negative
        else if model.background.r.value - 10 < 0 then Positive
        else model.background.r.direction
    gDirection = 
      if model.background.g.value + 10 >= 255 then Negative
        else if model.background.g.value - 10 < 0 then Positive
        else model.background.g.direction
    bDirection =
      if model.background.b.value + 10 >= 255 then Negative
        else if model.background.b.value - 10 < 0 then Positive
        else model.background.b.direction

    generateRandomInt min max =
      Tuple.first (step (Random.int min max) (Random.initialSeed (truncate (inMilliseconds model.currentTime))))
  
  in
    { model |
        background = { background |
            r = { value =
                    case rDirection of
                      Positive ->
                        model.background.r.value + ( generateRandomInt 1 3 )
                      Negative ->
                        model.background.r.value - ( generateRandomInt 1 3 )
                , direction = rDirection
                },
            g = { value =
                      case gDirection of
                        Positive ->
                          model.background.g.value + ( generateRandomInt 4 6 )
                        Negative ->
                          model.background.g.value - ( generateRandomInt 4 6 )
                  , direction = gDirection
                  },
            b = { value =
                      case bDirection of
                        Positive ->
                          model.background.b.value + ( generateRandomInt 7 10 )
                        Negative ->
                          model.background.b.value - ( generateRandomInt 7 10 )
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
  UpdateTime