<?php
// Basic PHP Syntax and Variable Declaration
$name = "John Doe"; // String variable
$age = 30;          // Integer variable
$isEmployed = true; // Boolean variable
$skills = ["PHP", "JavaScript", "HTML", "CSS"]; // Array variable

// Functions in PHP
/**
 * A simple function to greet a user by name.
 *
 * @param string $name The name of the user.
 * @return string A greeting message.
 */
function greetUser($name) {
    return "Hello, $name! Welcome to the PHP world.";
}

// Conditional Statements
/**
 * Checks employment status and returns a message.
 *
 * @param bool $isEmployed Employment status.
 * @return string Employment message.
 */
function checkEmployment($isEmployed) {
    if ($isEmployed) {
        return "You are employed.";
    } else {
        return "You are currently unemployed.";
    }
}

// Loops in PHP
/**
 * Generates a list of skills from an array.
 *
 * @param array $skills An array of skills.
 * @return string HTML list of skills.
 */
function listSkills($skills) {
    $list = "<ul>";
    foreach ($skills as $skill) {
        $list .= "<li>$skill</li>";
    }
    $list .= "</ul>";
    return $list;
}

// Working with Forms (Simulating a POST request)
$formSubmitted = $_SERVER['REQUEST_METHOD'] === 'POST'; // Check if form was submitted
$userFeedback = $formSubmitted ? htmlspecialchars($_POST['feedback']) : "No feedback submitted.";

// Working with Sessions
session_start(); // Start a session
if (!isset($_SESSION['views'])) {
    $_SESSION['views'] = 0; // Initialize session variable
}
$_SESSION['views']++; // Increment views count

// Working with Cookies
setcookie("user", $name, time() + 3600, "/"); // Set a cookie for 1 hour

// Database Connection Example (using PDO)
// NOTE: Replace placeholders with actual database details if needed
try {
    $dsn = "mysql:host=localhost;dbname=testdb";
    $username = "root";
    $password = "";
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // Enable exceptions for errors
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, // Set fetch mode
    ];
    $pdo = new PDO($dsn, $username, $password, $options);
    $dbConnectionStatus = "Connected to the database successfully.";
} catch (PDOException $e) {
    $dbConnectionStatus = "Database connection failed: " . $e->getMessage();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Concepts Demonstration</title>
</head>
<body>
    <!-- Displaying Variables -->
    <h1><?php echo greetUser($name); // Call a PHP function to greet the user ?></h1>
    <p>Age: <?php echo $age; ?></p>
    <p><?php echo checkEmployment($isEmployed); // Call a function with a conditional statement ?></p>

    <!-- Displaying Array and Loops -->
    <h2>Your Skills:</h2>
    <?php echo listSkills($skills); // Call a function to generate a list of skills ?>

    <!-- Form Handling -->
    <h2>Feedback Form</h2>
    <form method="POST" action="">
        <label for="feedback">Your Feedback:</label>
        <textarea name="feedback" id="feedback" rows="5" required></textarea>
        <button type="submit">Submit Feedback</button>
    </form>
    <p><strong>Submitted Feedback:</strong> <?php echo $userFeedback; ?></p>

    <!-- Sessions and Cookies -->
    <h2>Session and Cookie Example</h2>
    <p>Page Views (Session): <?php echo $_SESSION['views']; ?></p>
    <p>Username (Cookie): <?php echo $_COOKIE['user'] ?? 'Not set'; ?></p>

    <!-- Database Status -->
    <h2>Database Connection</h2>
    <p><?php echo $dbConnectionStatus; ?></p>
</body>
</html>
