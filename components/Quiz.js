import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { seaweed, aqua, darkWhite, blue, white } from '../utils/colors'
import { clearLocalNotification, setLocalNotification } from '../utils/notifications'
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

    if (deck.questions.length === 0) {
      return (
        <View style={styles.background}>
          <View style={styles.sorryContainer}>
            <Text style={styles.smText}>Sorry, you cannot take a quiz because there are no cards in the deck.</Text>
          </View>
        </View>
      )
    }

    if (questionNumber > deck.questions.length) {
      const correctPercentage = correct/deck.questions.length*100

      clearLocalNotification()
        .then(setLocalNotification)

      return (
        <View style={styles.background}>
          <View style={styles.textContainer}>
            <Text style={styles.lgText}>{correct}/{deck.questions.length}</Text>
            <Text style={styles.lgText}>{correctPercentage.toFixed(2)}%</Text>
          </View>
          <TouchableOpacity
            onPress={this.startOver}
            style={styles.correctBtn}
          >
            <Text style={styles.text}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {this.props.navigation.navigate('Deck', {deckId: deck.title})}}
            style={styles.incorrectBtn}
          >
            <Text style={styles.text}>{`Back to ${deck.title}`}</Text>
          </TouchableOpacity>
        </View>
      )
    }
    return (
      <View style={styles.background}>
        <View style={styles.progressContainer}>
          <Text style={styles.smText}>{questionNumber}/{deck.questions.length}</Text>
        </View>
        <View style={styles.textContainer}>
          {questionAnswer === 'question' && (
            <View>
              <Text style={styles.lgText}>{deck.questions[questionNumber-1].question}</Text>
              <TouchableOpacity onPress={this.changeToAnswer} style={styles.qaTextContainer}>
                <Text style={styles.qaText}>Show Answer</Text>
              </TouchableOpacity>
            </View>
          )}
          {questionAnswer === 'answer' && (
            <View>
              <Text style={styles.lgText}>{deck.questions[questionNumber-1].answer}</Text>
              <TouchableOpacity onPress={this.changeToQuestion} style={styles.qaTextContainer}>
                <Text style={styles.qaText}>Show Question</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <TouchableOpacity
          onPress={this.correct}
          style={styles.correctBtn}
        >
          <Text style={styles.text}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.incorrect}
          style={styles.incorrectBtn}
        >
          <Text style={styles.text}>Incorrect</Text>
        </TouchableOpacity>
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

const styles = StyleSheet.create({
  background: {
    backgroundColor: darkWhite,
    flex: 1
  },
  progressContainer: {
    margin: 10
  },
  textContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300
  },
  lgText: {
    fontSize: 20,
    alignItems: 'center',
    alignSelf: 'center'
  },
  smText: {
    fontSize: 18
  },
  qaTextContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  qaText: {
    color: blue,
    fontSize: 12
  },
  correctBtn: {
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    width: 150,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: blue,
    marginBottom: 20
  },
  incorrectBtn: {
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    width: 150,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: seaweed,
    marginBottom: 20
  },
  text: {
    color: darkWhite
  },
  sorryContainer: {
    marginHorizontal: 40,
    marginBottom: 120,
    justifyContent: 'center',
    flex: 1
  }
})