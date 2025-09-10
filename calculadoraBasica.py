print("Bienvenido a la calculadora básica")

# Pedir números
numero1 = float(input("Ingrese un número: "))
numero2 = float(input("Ingrese un segundo número: "))

# Pedir operación
operacion = input("Ingrese la operación que desea realizar (+, -, *, /): ")

if operacion == "+":
    print(f"La suma de {numero1} y {numero2} es: {numero1 + numero2}")
elif operacion == "-":
    print(f"La resta de {numero1} y {numero2} es: {numero1 - numero2}")
elif operacion == "*":
    print(f"La multiplicación de {numero1} y {numero2} es: {numero1 * numero2}")
elif operacion == "/":
    if numero2 != 0: 
        print(f"La división de {numero1} y {numero2} es: {numero1 / numero2}")
    else:
        print("Error: No se puede dividir entre cero.")
else:
    print("Operación inválida. Use +, -, * o /.")

