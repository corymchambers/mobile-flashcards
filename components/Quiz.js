import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

class Quiz extends Component {
  state = {
    questionNumber: 1,
    questionAnswer: 'question',
    correct: 0,
    incorrect: 0
  }
  changeToAnswer = () => {
    this.setState({questionAnswer: 'answer'})
  }
  changeToQuestion = () => {
    this.setState({questionAnswer: 'question'})
  }
  correct = () => {
    this.setState({
      questionNumber: this.state.questionNumber + 1,
      correct: this.state.correct + 1
    })
  }
  incorrect = () => {
    this.setState({
      questionNumber: this.state.questionNumber + 1,
      incorrect: this.state.incorrect + 1
    })
  }
  startOver = () => {
    this.setState({
      questionNumber: 1,
      questionAnswer: 'question',
      correct: 0,
      incorrect: 0
    })
  }
  render() {
    const { deck } = this.props
    const { questionNumber, questionAnswer, correct } = this.state

    if (questionNumber > deck.questions.length) {
      return (
        <View>
          <Text>{correct}/{deck.questions.length}</Text>
          <Text>{correct/deck.questions.length*100}%</Text>
          <Button title='Restart Quiz' onPress={this.startOver} />
          <Button title={`Back to ${deck.title}`} onPress={() => {this.props.navigation.navigate('Deck', {deckId: deck.title})}} />
        </View>
      )
    }
    return (
      <View>
        <Text>{questionNumber}/{deck.questions.length}</Text>
        <View>
          {questionAnswer === 'question' && (
            <View>
              <Text>{deck.questions[questionNumber-1].question}</Text>
              <Button onPress={this.changeToAnswer} title='Answer'/>
            </View>
          )}
          {questionAnswer === 'answer' && (
            <View>
              <Text>{deck.questions[questionNumber-1].answer}</Text>
              <Button onPress={this.changeToQuestion} title='Question'/>
            </View>
          )}
        </View>
        <Button title='Correct' onPress={this.correct} />
        <Button title='Incorrect' onPress={this.incorrect} />
      </View>
    )
  }
}

function mapStateToProps (decks, props) {
    const deckId = props.navigation.state.params.deckId
    const deck = decks[deckId]
    return {
      deck
    }
  }

export default connect(mapStateToProps)(Quiz)
