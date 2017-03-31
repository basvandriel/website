<?php

    namespace WWW;

    class PHPUnitTest extends \PHPUnit\Framework\TestCase
    {
        public function testPHPUnit()
        {
            $expected = is_a($this, "\\PHPUnit\\Framework\\TestCase");
            $this->assertTrue($expected);
        }
    }
