__author__ = "Michał Kuśmierczyk (kusm@protonmail.ch)"
__date__ = "30.01.15"
__license__ = "Python"


def play_hangman():
    """Play a hangman
    print game
    no input or return"""
    word = random_word()
    word_hidden = "_" * len(word)
    letter = "_"
    current_hangman = 0

    while current_hangman < 6:
        print_hangman(current_hangman, word_hidden)
        letter = input("\n" + "Pick a letter: ")
        new_hidden = show_letters(letter, word, word_hidden)
        if not new_hidden:
            current_hangman += 1
        else:
            word_hidden = new_hidden

        if "_" not in word_hidden:
            print_hangman(current_hangman, word_hidden)
            break

    if current_hangman == 6:
        print_hangman(current_hangman, word_hidden)
        print("\nYou lose!")
    else:
        print("\nYou win!")


def print_hangman(current_hangman, word_hidden):
    clear()
    hangmans = hangman_figures()
    print(hangmans[current_hangman])
    print("WORD:", end=" ")
    print(word_hidden)


def show_letters(letter, word, hidden):
    if letter not in word:
        return False
    hidden = list(hidden)
    word = list(word)
    for index, char in enumerate(word):
        if char == letter:
            hidden[index] = letter
    hidden = "".join(hidden)
    return hidden


def clear():
    import os
    os.system('cls' if os.name == 'nt' else 'clear')


def hangman_figures():
    hangman = (
        r"""
    _____
    |   |
    |
    |
    |
    |
    """,
        r"""
    _____
    |   |
    |   o
    |
    |
    |
    """,
        r"""
    _____
    |   |
    |   o
    |   |
    |
    |
    """,
        r"""
    _____
    |   |
    |   o
    |  /|
    |
    |
    """,
        r"""
    _____
    |   |
    |   o
    |  /|\
    |
    |
    """,
        r"""
    _____
    |   |
    |   o
    |  /|\
    |  /
    |
    """,
        r"""
    _____
    |   |
    |   o
    |  /|\
    |  / \
    |
    """
    )
    return hangman


def random_word():
    from random import randint

    words = words_database()
    return words[randint(0, len(words) - 1)]


def words_database():
    words = load_words("words")
    words_list = words.split("\n")
    new_list = [word for word in words_list if is_legit(word)]
    return new_list


def is_legit(word):
    return len(word) > 4 and word.islower() and not word[-2:] == "'s" \
           and in_alphabet(word)


def in_alphabet(word):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    for letter in word:
        if letter not in alphabet:
            return False
    return True


def load_words(words_file):
    sock = open(words_file)
    words = sock.read()
    sock.close()
    return words


if __name__ == "__main__":
    play_hangman()
    while True:
        again = input("\nWanna play again? [Y/n]").upper()
        if again == "Y" or again == "":
            play_hangman()
        else:
            break
