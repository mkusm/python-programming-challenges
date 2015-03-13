__author__ = "Michał Kuśmierczyk (kusm@protonmail.ch)"
__date__ = "30.01.15"
__license__ = "Python"

from random import randint


def rock_paper_scissors(move):
    """Plays a game of rock paper scissors
    :return string"""
    moves = ("rock", "paper", "scissors")
    move = move.lower()
    if move not in moves:
        return "Invalid input!"
    computer_move = moves[randint(0, 2)]
    result = "Your move is %s\n" \
             "Computer move is %s\n" \
             "Result: " % (move, computer_move)
    if computer_move == move:
        result += "Draw"
    elif (move == moves[0] and computer_move == moves[1]) or \
         (move == moves[1] and computer_move == moves[2]) or \
         (move == moves[2] and computer_move == moves[0]):
        result += "You lose!"
    elif (move == moves[0] and computer_move == moves[2]) or \
         (move == moves[1] and computer_move == moves[0]) or \
         (move == moves[2] and computer_move == moves[1]):
        result += "You win!"
    return result

if __name__ == "__main__":
    while True:
        input_string = input("Rock, paper or scissors? ")
        print(rock_paper_scissors(input_string))
        print("")
        input_choice = input("Do you want to play again? [y/N] ")
        if input_choice == "n" or input_choice == "N" or input_choice == "":
            break