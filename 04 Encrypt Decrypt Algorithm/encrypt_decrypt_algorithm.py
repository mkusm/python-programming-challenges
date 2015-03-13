__author__ = "Michał Kuśmierczyk (kusm@protonmail.ch)"
__date__ = "30.01.15"
__license__ = "Python"


def encryptor(key, message):
    """Encrypt a message using Ceasar Cipher"""
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    encrypted_message = []
    for letter in message:
        if not (letter.lower() in alphabet):
            encrypted_message.append(letter)
        else:
            index = alphabet.index(letter.lower())
            index += key
            new_letter = alphabet[index % 26]
            if letter.isupper():
                new_letter = new_letter.upper()
            encrypted_message.append(new_letter)
    encrypted_message = "".join(encrypted_message)
    return encrypted_message


def decryptor(key, message):
    """Decrypt a message using Ceasar Cipher"""
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    decrypted_message = []
    for letter in message:
        if not (letter.lower() in alphabet):
            decrypted_message.append(letter)
        else:
            index = alphabet.index(letter.lower())
            index -= key
            new_letter = alphabet[index % 26]
            if letter.isupper():
                new_letter = new_letter.upper()
            decrypted_message.append(new_letter)
    decrypted_message = "".join(decrypted_message)
    return decrypted_message

if __name__ == "__main__":
    choice = input("'e' to encrypt message, 'd' to decrypt message. ")
    input_key = int(input("Key: "))
    input_message = input("Message: ")
    if choice == 'e':
        print(encryptor(input_key, input_message))
    elif choice == 'd':
        print(decryptor(input_key, input_message))
    else:
        print("error")
