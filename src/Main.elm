import Html exposing ( Html, div, text )
import Html.Attributes exposing ( class )
import Global_CSS exposing ( flex, justify_center )

main : Program Never Model Msg
main =
  Html.beginnerProgram { model = model, view = view, update = update }

type alias Model =
  { greeting: String
  }

model : Model
model =
  { greeting = "Hello World!"
  }

type Msg = Default

update : Msg -> Model -> Model
update msg model =
  model

view : Model -> Html Msg
view model =
  div []
    [ div [ class "headerDiv" ] [] 
    , div [ flex, justify_center ] [ text model.greeting ]
    ]
  