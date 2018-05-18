import Html exposing ( Html, div, text )

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
  div [] [ text model.greeting ]