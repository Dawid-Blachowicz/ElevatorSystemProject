package com.ElevatorSystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/system")
@CrossOrigin
public class ElevatorSystemController {
    ElevatorSystem elevatorSystem;

    @Autowired
    public ElevatorSystemController(ElevatorSystem elevatorSystem) {this.elevatorSystem = elevatorSystem;}

    @PostMapping("/elevatorsNumber")
    public void setElevatorsNumber(@RequestBody int elevatorsNumber) {
        elevatorSystem.setElevatorsNumber(elevatorsNumber);
        elevatorSystem.init();
    }

    @PostMapping("/floorsNumber")
    public void setFloorsNumber(@RequestBody int floorsNumber) {
        elevatorSystem.setFloorsNumber(floorsNumber);
    }

    @GetMapping("/floorsNumber")
    public int getFloorsNumber() {
        return elevatorSystem.getFloorsNumber();
    }

    @GetMapping("/elevatorsNumber")
    public int getElevatorsNumber() {
        return elevatorSystem.getElevatorsNumber();
    }
}
